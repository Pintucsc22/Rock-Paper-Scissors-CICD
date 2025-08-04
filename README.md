# 🪨 Rock Paper Scissors - Node.js CI/CD Demo

This is a full-stack Rock Paper Scissors game built with **Node.js + Express** for the backend and **HTML/CSS/JS** for the frontend — fully containerized with Docker and deployed via a GitHub Actions CI/CD pipeline.

---
## 🎯 Goal of This Project

This project was built as part of a hands-on DevOps learning journey with Elevate Labs:

### ✅ 1. Learn and Implement CI/CD with Docker
The goal was to gain real-world experience in:
- Automating workflows using GitHub Actions
- Building and pushing Docker images
- Managing secrets securely
- Following modern DevOps practices

### ✅ 2. Bridge Development with Deployment
This app bridges frontend and backend development (Node.js + HTML/CSS/JS) with full automation:
- Code → Build → Test → Deploy pipeline
- Show how a simple game project can become a real CI/CD workflow

> 💡 Built for learning, automation, and confidence-building in real DevOps practices.


## 🔧 Tech Stack

- 🟢 Node.js + Express (Backend)
- 🎨 HTML, CSS, JavaScript (Frontend)
- 🐳 Docker (Containerization)
- ⚙️ GitHub Actions (CI/CD)
- ☁️ DockerHub (Image Hosting)

---

## 🖼️ Screenshots

| Game UI | GitHub Actions |
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

---

## 🙌 Final Thoughts

This project may look simple, but it's packed with everything you need to understand real-world DevOps concepts—from version control and containerization to CI/CD automation.

Whether you're learning, building, or just experimenting, I hope this project inspires you to explore more, break things (safely!), and keep improving.

Thanks for visiting the repo! Feedback, forks, and contributions are always welcome. 🚀

