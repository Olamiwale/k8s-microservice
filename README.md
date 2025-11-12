# Microservices E-commerce Platform

This project is a microservices-based e-commerce platform designed to demonstrate DevOps best practices using Kubernetes and CI/CD pipelines. The system is composed of four main services, each running in its own container and orchestrated with Kubernetes.



docker build -t myapp:latest .
docker tag myapp:latest docker.io/<your-dockerhub-username>/myapp:latest

docker push docker.io/<your-dockerhub-username>/myapp:latest



# 1. Build Docker image
docker build -t order-service:v1 .

docker build -t briitzacr.azurecr.io/order-service:v1 .
docker build -t briitzacr.azurecr.io/user-service:v1 .

# 2. Log in to Azure
az login

# 3. Log in to Azure Container Registry (ACR)
az acr login --name <your-acr-name>

# 4. Tag the image for ACR
docker tag myimage:v1 <your-acr-name>.azurecr.io/myimage:v1

docker tag order-service:v1 briitzacr.azurecr.io/order-service:v1
docker tag order-service:v1 briitzacr.azurecr.io/order-service:v1

# 5. Push the image to ACR
docker push <your-acr-name>.azurecr.io/myimage:v1

docker push briitzacr.azurecr.io/order-service:v1
docker push briitzacr.azurecr.io/user-service:v1