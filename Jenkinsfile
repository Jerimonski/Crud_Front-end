pipeline {
  agent any

  parameters {
    choice(name: 'DEPLOY_ENV', choices: ['development', 'production'], description: 'Elige el entorno de despliegue')
  }

  stages {
    stage('Instalar dependencias') {
      steps {
        sh 'npm install'
      }
    }

    stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQubeCommunity') {
          withCredentials([string(credentialsId: 'sonar-token-front', variable: 'SONAR_TOKEN')]) {
            sh 'npx sonar-scanner -Dsonar.token=$SONAR_TOKEN'
          }
        }
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Deploy') {
      steps {
        script {
          def path = params.DEPLOY_ENV == 'development' ? '/var/www/front-dev' : '/var/www/front-prod'
          withCredentials([sshUserPrivateKey(credentialsId: 'ssh-credential-id-serverb', keyFileVariable: 'SSH_KEY')]) {
            sh """
              ssh -o StrictHostKeyChecking=no -i \$SSH_KEY deployadmin@38.242.243.201 'rm -rf ${path}/*'
              scp -o StrictHostKeyChecking=no -i \$SSH_KEY -r dist/* deployadmin@38.242.243.201:${path}
            """
          }
        }
      }
    }
  }
}
