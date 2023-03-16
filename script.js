
let totalscore={'player':0,'computer':0}
function getComputerChoice() {


  const randomFruit = (computerInputs) => {
    const randomNumber = Math.floor(Math.random() * computerInputs.length)

    console.log(randomNumber)

    return computerInputs[randomNumber]
  }

  computerInputs = ['rock', 'paper', 'scissor']
  const compchoice = randomFruit(computerInputs)

  return compchoice
}


function getResult(playerChoice, computerChoice) {

  let score = 0
  if (playerChoice == "rock" && computerChoice == "scissor" || playerChoice == "paper" && computerChoice == "rock" ||playerChoice == "scissor" && computerChoice == "paper") {
    score += 1
    
  }
  else if (playerChoice == "scissor" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "scissor"  || playerChoice == "rock" && computerChoice == "paper") {
    score -= 1
    
  }
  else if (playerChoice == "rock" && computerChoice == "rock" || playerChoice == "scissor" && computerChoice == "scissor" || playerChoice == "paper" && computerChoice == "paper") {
    score += 0
    
  }
  return score


}


function showResult(score, playerChoice, computerChoice) {
  // let res=getResult()
  // let player=document.getElementsByClassName(".rpsButton")
  // let playerChoice=onClickRPS()
  // let computerChoice=getComputerChoice()
  let player = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  player.innerText = `score:${totalscore['player']}`;
  hands.innerText = `👨${playerChoice} vs 💻${computerChoice}`;
  let res = getResult(playerChoice, computerChoice);
  console.log("res is",res)
  switch(res){
    case 1:
      // res=1;
      result.innerText="winner";
      break;
    case -1:
      // res=-1;
      result.innerText="looser";
      break;
    case 0:
      // res=0;
      result.innerText="GameDraw";
      break;
  }
  
}


function onClickRPS(playerChoice) {
  // let player=document.getElementsByClassName(".rpsButton")
  // let playerchoice=player.value
  // return playerchoice
  let playerChoice1=playerChoice.value
  let computerChoice = getComputerChoice()
  console.log("comp choice",computerChoice)
  console.log("player choice",playerChoice1)
  let score = getResult(playerChoice1, computerChoice)
  
  totalscore['player']+=score
  showResult(score, playerChoice1, computerChoice)
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  let all_button = document.querySelectorAll(".rpsButton")
 
  all_button.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton)
  })


  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()
}


function endGame() {
  let player = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  player.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}

playGame()