
# 🪨 Rock Paper Scissors - Node.js CI/CD & IaC Demo

A full-stack **Rock Paper Scissors game** built with Node.js + Express for the backend and HTML/CSS/JS for the frontend — fully containerized with Docker, deployed via a GitHub Actions CI/CD pipeline, and **infrastructure-managed with Terraform**.

---

## 🎯 Goal of This Project

This project was built as part of a hands-on DevOps learning journey with Elevate Labs, with two main goals:

---

### ✅ 1. Learn and Implement CI/CD with Docker

Hands-on DevOps practices including:

- Automating workflows using **GitHub Actions**
- Building and pushing **Docker images**
- Managing **secrets securely**
- Following **modern CI/CD pipelines**

---

### ✅ 2. Bridge Development with Deployment

This project bridges development (Node.js + HTML/CSS/JS) with full automation:

- Code → Build → Test → Deploy
- Show how even a simple app can adopt **production-style DevOps**

💡 Built for learning, automation, and confidence-building in real DevOps practices.

---

## 🔧 Tech Stack

| Layer        | Tools Used                  |
|--------------|-----------------------------|
| Backend      | 🟢 Node.js + Express         |
| Frontend     | 🎨 HTML, CSS, JavaScript     |
| Containerization | 🐳 Docker               |
| CI/CD        | ⚙️ GitHub Actions            |
| Infra as Code| 🛠️ Terraform (with AWS EC2) |
| Image Hosting| ☁️ DockerHub                |

---

## 🖼️ Screenshots

| Game UI | Result |
|---------|--------|
| ![Game UI](screenshots/game-ui.png) | ![Result](screenshots/result.png) |

---

## 🚀 How to Run Locally

### ▶️ Run with Node.js

```bash
npm install
npm start
````

---

### 🐳 Run with Docker

```bash
docker pull gituser1/rps-game
docker run -p 3000:3000 gituser1/rps-game
```

---

## ☁️ Deploying with Terraform + AWS EC2

This project includes a `main.tf` file to deploy the app using **Terraform** on an EC2 instance:

### ✅ Steps:

1. Update `main.tf` with your AWS credentials and key pair
2. Initialize Terraform:

```bash
terraform init
```

3. Apply infrastructure:

```bash
terraform apply
```

4. Access the app via your EC2's public IP:

```
http://<your-ec2-public-ip>:3000
```

5. Destroy the resources when done:

```bash
terraform destroy
```

---

## 🔄 GitHub Actions CI/CD Workflow

Every push to `main` triggers the following workflow:

1. Installs Node.js dependencies
2. Builds the Docker image
3. Logs in to DockerHub
4. Pushes the image as `gituser1/rps-game:latest`

### 🔐 Required GitHub Secrets

| Name              | Description                             |
| ----------------- | --------------------------------------- |
| `DOCKER_USERNAME` | Your DockerHub username                 |
| `DOCKER_PASSWORD` | Your DockerHub password or access token |

---

## 🙌 Final Thoughts

This project may look simple, but it's packed with everything you need to explore **real-world DevOps**:

* ✅ Git version control
* ✅ Docker containerization
* ✅ GitHub Actions CI/CD
* ✅ Terraform infrastructure deployment

Whether you're learning, building, or just experimenting, I hope this project inspires you to keep exploring, break things (safely!), and grow your DevOps confidence.

> Thanks for visiting the repo! Feedback, forks, and contributions are always welcome. 🚀


