function textHello(yourChoice){
    console.log(yourChoice);
    var humanChoice ,botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice',botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message)


function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return['rock','paper','scissor'][number];
}
 function decideWinner(yourChoice,computerChoice){
 var rpsDatabase={
     'rock':{'scissor':1,'rock':0.5,'paper':0},
     'scissors':{'paper':1,'scissors':0.5,'rock':0},
     'paper':{'rock':1,'paper':0.5,'scissors':0}
 };
 }
 
 function finalMessage(yourScore){

     if(yourScore === 0){
         return {'messsage':'you lost','color':'red'};
     }
     else if (yourScore === 0.5){
         return {'message':'tied','color':'yellow'};
     }
     else{
         return " ";
     }
 }
  function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
      var imagesDatabase = {
          'rock':document.getElementById('rock').src,
          'paper':document.getElementById('paper').src,
          'scissor':document.getElementById('scissor').src
      };
       document.getElementById('rock').remove();
       document.getElementById('paper').remove();
       document.getElementById('scissor').remove();

      var humanDiv = document.createElement('div');
      var botDiv = document.createElement('div');
      var messageDiv = document.createElement('div');

      humanDiv.innerHTML ="<img src='" +imagesDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow : 0px 10px 50pxrgba(39,38,68);'>"
      messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] +"; front-size: 60px;'>"
      botDiv.innerHTML ="<img src='" +imagesDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow : 0px 10px 50pxrgba(39,38,68);'>"
      
      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(messageDiv);
      document.getElementById('flex-box-rps-div').appendChild(botDiv);
  }}