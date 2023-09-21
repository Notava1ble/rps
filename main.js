const getComputerChoice = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	const rpsArray = ["rock", "paper", "scissors"];
	return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
	const winner =
		player === computer
			? "Tie game!"
			: player === "rock" && computer === "paper"
			? `Computer wins!`
			: player === "paper" && computer === "scissors"
			? `Computer wins!`
			: player === "scissors" && computer === "rock"
			? `Computer wins!`
			: `player wins!`;

	return winner;
};

const rock = document.getElementById("rock");
console.log(rock);
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const pcChoiceOutoput = document.getElementById("computerChoice");
const playerChoiceOutput = document.getElementById("playerChoice");
console.log(playerChoiceOutput);

rock.addEventListener("click", (event) => {
	const playerChoice = "rock";
	computerChoice = getComputerChoice();
	winner = determineWinner(playerChoice, computerChoice);
	result.textContent = winner;
	pcChoiceOutoput.textContent = `Computer: ${computerChoice}`;
	playerChoiceOutput.textContent = `Player: ${playerChoice}`;
});

paper.addEventListener("click", (event) => {
	const playerChoice = "paper";
	computerChoice = getComputerChoice();
	winner = determineWinner(playerChoice, computerChoice);
	result.textContent = winner;
	pcChoiceOutoput.textContent = `Computer: ${computerChoice}`;
	playerChoiceOutput.textContent = `Player: ${playerChoice}`;
});

scissors.addEventListener("click", (event) => {
	const playerChoice = "scissors";
	computerChoice = getComputerChoice();
	winner = determineWinner(playerChoice, computerChoice);
	result.textContent = winner;
	pcChoiceOutoput.textContent = `Computer: ${computerChoice}`;
	playerChoiceOutput.textContent = `Player: ${playerChoice}`;
});
