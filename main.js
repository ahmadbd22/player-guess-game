const container = document.querySelector(".container");
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");
const winingScoreDisplay = document.querySelector("p span")
const inputScore = document.getElementById("inputScope");
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const resetBtn = document.getElementById("resetBtn");

let p1Score = 0;
let p2Score = 0;
let winScore = 5;
 let guessResult = Math.ceil(Math.random() * winScore);
let gameOver = false;

// function randomNum(){
//     return Math.ceil(Math.random() * winScore)
// }

function disable (playerBtn) {
    playerBtn.setAttribute('disabled', 'disabled');
}

function enable (playerBtn) {
    playerBtn.removeAttribute('disabled');
}

function winner(oldScore, winScore){
    if(oldScore === winScore){
        if(p1Score === winScore){
        player1Score.classList.add('winner')
        }else{
        player2Score.classList.add('winner')
        }
        //Game Over
        gameOver = true;
        player1Btn.setAttribute('disabled', 'disabled')
        player2Btn.setAttribute('disabled', 'disabled')
    }
}

function reset(){
    
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    player1Score.textContent =  0;
    player2Score.textContent =  0;
    player1Btn.removeAttribute('disabled')
    player2Btn.removeAttribute('disabled')
    player1Score.classList.remove('winner')
    player2Score.classList.remove('winner')

}

player1Btn.addEventListener('click', ()=> {
    if(!gameOver){
    //     guessResult = randomNum()
    //    p1Score += guessResult;
    p1Score = guessResult;
    guessResult++;
       winner(p1Score, winScore)
        disable(player1Btn); 
        enable(player2Btn); 
   
    player1Score.textContent =  p1Score;
}
})
player2Btn.addEventListener('click', ()=> {
    if(!gameOver){
    //     guessResult = randomNum()
    //    p2Score += guessResult;
    p2Score = guessResult;
    guessResult++;
       winner(p2Score, winScore);
        disable(player2Btn); 
        enable(player1Btn); 
    
    player2Score.textContent =  p2Score;
}
})


inputScope.addEventListener('change', () => {
    console.log(inputScore.value)
    winScore = Number(inputScore.value);
    winingScoreDisplay.textContent = inputScore.value;
    inputScore.value = '';
    reset();
    
})

resetBtn.addEventListener('click' , reset)









