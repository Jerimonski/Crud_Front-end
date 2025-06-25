pipeline {
  agent any

  parameters {
    choice(name: 'DEPLOY_ENV', choices: ['development', 'production'], description: 'Elige el entorno de despliegue')
  }

  environment {
    SSH_USER = 'deployadmin'
    SSH_HOST = '38.242.243.201'
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        echo '📦 Instalando dependencias del frontend...'
        sh '''
          set -e
          npm install
        '''
        echo '✅ Dependencias instaladas correctamente.'
      }
    }

    stage('Análisis con SonarQube') {
      steps {
        echo '🔍 Ejecutando análisis de calidad con SonarQube...'
        withSonarQubeEnv('SonarQubeCommunity') {
          withCredentials([string(credentialsId: 'sonar-token-front', variable: 'SONAR_TOKEN')]) {
            sh '''
              set -e
              npx sonar-scanner -Dsonar.token=$SONAR_TOKEN
            '''
          }
        }
        echo '📊 Análisis completado ✅'
      }
    }

    stage('Preparar entorno') {
      steps {
        echo '🛠️ Seleccionando archivo .env correcto según el entorno...'
        sh '''
          set -e
          if [ "${DEPLOY_ENV}" = "development" ]; then
            cp .env.development .env
          else
            cp .env.production .env
          fi

          echo '🔎 Contenido del archivo .env utilizado:'
          cat .env
        '''
      }
    }

    stage('Build') {
      steps {
        echo '🏗️ Construyendo la aplicación frontend...'
        sh '''
          set -e
          npm run build
        '''
        echo '🎉 Build generado correctamente.'
      }
    }

    stage('Deploy') {
      steps {
        script {
          def path = params.DEPLOY_ENV == 'development' ? '/var/www/front-dev' : '/var/www/front-prod'
          def puerto = params.DEPLOY_ENV == 'development' ? 8081 : 9091

          echo "🚀 Desplegando frontend para: ${params.DEPLOY_ENV}..."
          echo "📁 Ruta remota: ${path}"
          echo "🌐 Puerto asociado: ${puerto}"

          withCredentials([sshUserPrivateKey(credentialsId: 'ssh-key-serverb', keyFileVariable: 'SSH_KEY')]) {
            sh """
              set -e

              echo '🧹 Limpiando carpeta remota...'
              ssh -i \$SSH_KEY ${env.SSH_USER}@${env.SSH_HOST} 'rm -rf ${path}/*'

              echo '📦 Subiendo archivos construidos...'
              scp -i \$SSH_KEY -r dist/* ${env.SSH_USER}@${env.SSH_HOST}:${path}/

              echo '✅ Despliegue completado en ${params.DEPLOY_ENV}!'
              echo '🌍 Accede a: http://${env.SSH_HOST}:${puerto}'
            """
          }
        }
      }
    }
  }

  post {
    always {
      echo '🎬 Pipeline frontend finalizado.'
    }

    success {
      echo '🎉 Despliegue frontend exitoso.'
    }

    failure {
      echo '🚨 Algo falló durante el despliegue del frontend.'
    }
  }
}
