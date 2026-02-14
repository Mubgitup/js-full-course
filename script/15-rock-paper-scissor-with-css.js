let score =JSON.parse(localStorage.getItem('score'))||{
    win: 0,
    lose: 0,
    tie: 0
    };
udateScore();
function picComputerMove(){
    let randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'Rock'
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
              computerMove  = 'paper'
    }
    if (randomNumber >= 2/3 && randomNumber < 1){
          computerMove = 'Scissors'
    }
     return  computerMove;
}
console.log('hello');
function playgame(usermove){
    const computerMove = picComputerMove();
    let result='';
    if(usermove === 'Rock'){
        if(computerMove === 'Rock'){
                 result='tie.'
        }else if(computerMove === 'paper'){
                 result='You lose.'
        }else if(computerMove === 'Scissors'){
                  result='You win..'
            }
    } else if(usermove=='paper'){
        if(computerMove === 'Rock'){
            result= 'You win..' 
        }else if(computerMove === 'paper'){
               result= 'Tie.'
        }else if(computerMove === 'Scissors'){
              result='You lose.'
        }
            
    }else if(usermove ==='scissors'){
        if(computerMove === 'Rock'){
            result= 'You lose.' 
        } else if(computerMove === 'paper'){
             result= 'You win..' 
        }else if(computerMove === 'Scissors'){
              result='tie.'
             }    
    }
     
    if(result==='You win..' ){
       score.win++
    } else  if(result==='You lose.' ){
       score.lose++
    } else if(result==='tie.' ){
       score.tie++
    } 
    udateScore();
    localStorage.setItem("score" , JSON.stringify(score));
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-move').innerHTML=`You  <img class="move-imogi" src="pic/${usermove}-emoji.png">--<img class="move-imogi" src="pic/${computerMove}-emoji.png"> Computer`;
     
 }
function udateScore(){
    document.querySelector('.js-score')
      .innerHTML=`lose: <span class="lose">${score.lose}</span>   win: <span class="win">${score.win}</span>  Tie: <span class="Tie">${score.tie}</span>`;

}
       