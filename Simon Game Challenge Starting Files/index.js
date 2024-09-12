
// alert("dicb");   to check if script is linked
// console.log($("h1"));   to check if jquery is linked
var buttonColours=["red", "blue", "green", "yellow"];


var gamePattern=[]; 
var userClickedPattern=[];
var started = false;

var level = 0;

$(document).keypress(function(){
  if(!started){
    $(document).text("Level"+ level);
    nextSequence();
    started=true;
  }
  
})
$(".btn").click(function(){
  var userChosenColour= $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  var audio=new Audio("sounds/"+userChosenColour+".mp3");
  audio.play();

//   PlaySound(userChosenColour); METHOD-2
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);    
});

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }
  }
  else {

    console.log("wrong");

    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(function () {
    $("body").removeClass("game-over");},200);
    
    $("#level-title").text("Game Over, Press Any Key to Restart");

    startOver();
  }
}
function nextSequence(){
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);

    var randomNumber= Math.floor((Math.random() * 4));
    console.log(randomNumber);

var randomChosenColour= buttonColours[randomNumber];
console.log(randomChosenColour);
gamePattern.push(randomChosenColour);
console.log(gamePattern);

$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/"+ randomChosenColour+".mp3");
audio.play();

// PlaySound(randomChosenColour);   METHOD-2
animatePress(randomChosenColour);
}

// function PlaySound(name){        METHOD-2
// var audio = new Audio("sounds/"+ name+".mp3");
// audio.play();
// }

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
      }, 100);
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  

