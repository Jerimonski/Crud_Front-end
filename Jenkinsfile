pipeline {
  agent any

  parameters {
    choice(name: 'DEPLOY_ENV', choices: ['development', 'production'], description: 'Elige el entorno de despliegue')
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        echo 'Instalando dependencias del frontend...'
        sh 'npm install'
        echo 'Dependencias instaladas correctamente.'
      }
    }

    stage('Análisis con SonarQube') {
      steps {
        echo 'Ejecutando análisis de calidad con SonarQube...'
        withSonarQubeEnv('SonarQubeCommunity') {
          withCredentials([string(credentialsId: 'sonar-token-front', variable: 'SONAR_TOKEN')]) {
            sh 'npx sonar-scanner -Dsonar.token=$SONAR_TOKEN'
          }
        }
        echo 'Análisis completado ✅'
      }
    }

    stage('Build') {
      steps {
        echo 'Construyendo la aplicación frontend...'
        sh 'npm run build'
        echo 'Build generado correctamente 🎉'
      }
    }

    stage('Deploy') {
      steps {
        script {
          echo "Desplegando frontend para: ${params.DEPLOY_ENV} ✨"
          
          def path = params.DEPLOY_ENV == 'development' ? '/var/www/front-dev' : '/var/www/front-prod'
          def puerto = params.DEPLOY_ENV == 'development' ? 8081 : 9091

          echo "🧩 Ruta remota: ${path}"
          echo "🌐 Puerto asociado: ${puerto}"

          withCredentials([sshUserPrivateKey(credentialsId: 'ssh-key-serverb', keyFileVariable: 'SSH_KEY')]) {
            sh """
              echo '🔌 Conectando al servidor y limpiando carpeta...'
              ssh -i \$SSH_KEY deployadmin@38.242.243.201 '
                rm -rf ${path}/*
              '

              echo '📦 Subiendo archivos construidos...'
              scp -i \$SSH_KEY -r dist/* deployadmin@38.242.243.201:${path}

              echo '🚀 Despliegue completado en ${params.DEPLOY_ENV}!'
              echo '🌍 Accede a: http://38.242.243.201:${puerto}'
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
