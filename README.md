<<<<<<< HEAD
# Rock Paper Scissors - Node.js CI/CD Demo

This is a simple Node.js + Express app that lets users play Rock Paper Scissors in their browser.

## 🔧 Tech Stack

- Node.js + Express (backend)
- HTML/CSS/JS (frontend)
- Docker (containerization)
- GitHub Actions (CI/CD pipeline)

## 🚀 How to Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

## 📦 Docker Commands

```bash
docker build -t rps-game .
docker run -p 3000:3000 rps-game
```

## 🔄 GitHub Actions Workflow

On every push to `main`, this repo:

1. Installs dependencies
2. Builds the Docker image
3. Logs in to DockerHub
4. Pushes the image

