# 🪨 Rock Paper Scissors - Node.js CI/CD Demo

This is a full-stack Rock Paper Scissors game built with **Node.js + Express** for the backend and **HTML/CSS/JS** for the frontend — fully containerized with Docker and deployed via a GitHub Actions CI/CD pipeline.

---

## 🔧 Tech Stack

- 🟢 Node.js + Express (Backend)
- 🎨 HTML, CSS, JavaScript (Frontend)
- 🐳 Docker (Containerization)
- ⚙️ GitHub Actions (CI/CD)
- ☁️ DockerHub (Image Hosting)

---

## 🖼️ Screenshots

| Game UI | Results |
|---------|----------------|
| ![Game UI](/images/PlayGame.png) | ![Result](/images/Result.png) |

---

## 🚀 How to Run Locally

### ▶️ Run with Node.js

```bash
npm install
npm start
```
-----------------
###🐳 Run with Docker
```bash
docker pull gituser1/rps-game
docker run -p 3000:3000 gituser1/rps-game
```
--------------------

## 🔄 GitHub Actions CI/CD Workflow

This project uses GitHub Actions to automate the build and deployment process.

On every push to the `main` branch, the workflow:

1. Installs Node.js dependencies
2. Builds the Docker image
3. Logs in to DockerHub
4. Pushes the image to:  
   `gituser1/rps-game:latest`

### 🔐 Required GitHub Secrets:
- `DOCKER_USERNAME` — your DockerHub username
- `DOCKER_PASSWORD` — your DockerHub password or access token
