const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const choices = ['rock', 'paper', 'scissors'];

app.post('/play', (req, res) => {
  const userChoice = req.body.userChoice;
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = '';
  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win! 🎉';
  } else {
    result = 'Computer wins! 😞';
  }
  res.json({ userChoice, computerChoice, result });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
