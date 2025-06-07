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
              ssh -i \$SSH_KEY deployadmin@194.163.140.23 'rm -rf ${path}/*'
              scp -i \$SSH_KEY -r dist/* deployadmin@194.163.140.23:${path}
            """
          }
        }
      }
    }
  }
}
