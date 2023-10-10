pipeline {
    agent any

    environment {
        // Define your Docker image and tag
        imageName = "hello-world"
        imageTag = "latest"
        dockerFile = "Dockerfile"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh "docker build -t ${imageName}:${imageTag} -f ${dockerFile} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    // Log in to Docker Hub (you can replace this with your registry)
                    sh "docker login -u mahendra283 -p Bannu283@"

                    // Push the Docker image to the registry
                    sh "docker push ${imageName}:${imageTag}"

                    // Log out from Docker Hub
                    sh "docker logout"
                }
            }
        }
    }

    post {
        always {
            // Clean up by removing the local Docker image
            sh "docker rmi ${imageName}:${imageTag}"
        }
    }
}