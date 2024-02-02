node {
    stage('Checkout') {
        checkout scm
    }

    stage('Instalar dependencias de angular') {
        'npm install'
    }

    stage('Construir la aplicacion') {
        'npm run build'
    }
}