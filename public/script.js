let round = 1;
let userScore = 0;
let computerScore = 0;
const totalRounds = 20;

function play(userChoice) {
  if (round > totalRounds) return;

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    userScore++;
    result = 'You win this round! 🎉';
  } else {
    computerScore++;
    result = 'Computer wins this round! 😞';
  }

  document.getElementById('user-choice').innerText = `You chose: ${userChoice}`;
  document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
  document.getElementById('winner').innerText = result;
  document.getElementById('score').innerText = `Round ${round} of ${totalRounds} | You: ${userScore} - Computer: ${computerScore}`;

  round++;

  if (round > totalRounds) {
    setTimeout(showFinalResult, 1000);
  }
}

function showFinalResult() {
  let finalMessage = '';

  if (userScore > computerScore) {
    finalMessage = `🏆 You won the match ${userScore} to ${computerScore}!`;
  } else if (userScore < computerScore) {
    finalMessage = `💔 You lost the match ${userScore} to ${computerScore}.`;
  } else {
    finalMessage = `🤝 It's a draw at ${userScore} - ${computerScore}.`;
  }

  const resultBox = document.createElement('div');
  resultBox.className = 'final-result';
  resultBox.innerHTML = `
    <h2>${finalMessage}</h2>
    <button onclick="location.reload()">🔁 Play Again</button>
  `;

  document.body.appendChild(resultBox);
}
