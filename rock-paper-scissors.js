  let compMove;
  let UserMove;
  let result;
  let Score ={win : 0 , lose:0 , draw:0};


  function Computerchoises(){
    compMove= Math.random();

    if(compMove <= 0.3){
    console.log(compMove);
    compMove = 'Rock';
    console.log(compMove);
    }
    else if (compMove > 0.3 && compMove <= 0.7){
    console.log(compMove);
    compMove = 'Paper';
    console.log(compMove);
    }
    else{
    console.log(compMove);
    compMove = 'Scissors';
    console.log(compMove);
    }}

  function UserchoiseRock()
  {
    if (UserMove === 'Rock' && compMove === 'Rock') {
    result = 'draw';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else if (UserMove === 'Rock' && compMove === 'Paper'){
    result = 'lose';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else {
    result = 'win';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    Result();
  }

  function UserchoisePaper()
  {
    if (UserMove === 'Paper' && compMove === 'Paper'){
    result = 'draw';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else if (UserMove === 'Paper' && compMove === 'Scissors'){
    result = 'lose';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else{
    result = 'win';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    Result();
  }

  function UserchoiseScissors()
  {
    if (UserMove === 'Scissors' && compMove === 'Scissors'){
    result = 'draw';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else if (UserMove === 'Scissors' && compMove === 'Rock'){
    result = 'lose';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    else {
    result = 'win';
    console.log(`you choose ${UserMove} and computer chooses ${compMove} it's a ${result}`)
    }
    Result();
  }

  function Result()
  { 
  if (result === 'win'){
  Score.win++;
  result = 'null'
  }
  else if(result === 'lose'){
  Score.lose++;
  result = 'null'
  }
  else if(result === 'draw'){
  Score.draw++;
  result = 'null'
  }
  updateScore();

  }

  function showScore(){
  let savedScore = localStorage.getItem('Score');
    if(savedScore){
    Score = JSON.parse(savedScore);
    }

    return (` \n wins: ${Score.win} - lose: ${Score.lose} - Draw: ${Score.draw}`);
    document.querySelector('.js_score').innerHTML = Score;
  }

  function updateScore() {
  localStorage.setItem('Score',JSON.stringify(Score));
  }

  function ResetScore() {
    localStorage.removeItem('Score');
    Score.win = 0 ;
    Score.lose = 0; 
    Score.draw = 0;

    updateScore(); // updating the score
    console.log('score reset');

    document.querySelector('.js_score')
    .innerHTML = showScore();    // showing score

    document.querySelector('.js_move')
    .innerHTML = 'move';
  }

  function dispalyscore(){  
  document.querySelector('.js_score')
  .innerHTML = showScore();
  }

  function move() {
  images();
  let moves = document.querySelector('.js_move');
  moves.innerHTML = `You<img src="${UserMove}" height="50px"> 
  computer  <img src="${compMove}" height="50px">`;
  }

  function images() {

    // assigning images to userMove variable 

    if (UserMove === 'Rock') {
    UserMove = "images/rock pic.png";
    } else if (UserMove === 'Scissors') {
    UserMove = "images/scissors.png";
    } else if (UserMove === 'Paper') {
    UserMove = "images/paper.png";
    }

    // assigning images to compMove variable 
    
    if (compMove === 'Paper') {
    compMove = "images/paper.png";
    } else if (compMove === 'Rock') {
    compMove = "images/rock pic.png";
    } else if (compMove === 'Scissors') {
    compMove = "images/scissors.png";
    }
  }
