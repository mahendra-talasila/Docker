pipeline {
    agent any
    
    environment {
        // Define environment variables, replace with your values
        DOCKER_REGISTRY = 'mahendra283'
        IMAGE_NAME = 'Docker-image'
        IMAGE_TAG = 'Docker-Jenkins'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your source code from your version control system
                // For example, if using Git:
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    dockerImage = docker.build("${env.DOCKER_REGISTRY}/${env.IMAGE_NAME}:${env.IMAGE_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Push the Docker image to the registry
                    dockerImage.push()
                }
            }
        }
    }

    post {
        success {
            // Clean up - remove the local Docker image after pushing
            script {
                dockerImage.remove()
            }
        }
    }
}
