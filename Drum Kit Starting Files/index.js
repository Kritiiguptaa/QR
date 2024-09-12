//detecting button press
var n=document.querySelectorAll(".drum").length;
for( var i =0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked); //if use clicked() then on refresh only show alert
                                                                    // if use clicked then click hone ke baad function alert dega
function clicked(){
    // console.log(this);      apne aap se highlight kr deta button ko jise click krte
    //this.style.color="white";
    var buttonInnerHTML= this.innerHTML; //for mouseclick
    makesound(buttonInnerHTML);  //for keyboard click
    buttonAnimation(buttonInnerHTML); //for annimation
}
}


//control with keyboard
document.addEventListener("keypress",function(event){  //keydown is for all keys; 
    // console.log(event);    tells which key was pressed                          //keypress is for all except ctrl,fn,capslock,alt
  makesound(event.key);
  buttonAnimation(event.key);
});

    function makesound(key){
    switch (key) {
        case 'w':
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
            
        case "d":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
        var tom4= new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

//method2
//document.addEventListener("keypress",function);
// function name(){

// })

function buttonAnimation(currentKey){
     var activeButton= document.querySelector("."+ currentKey); //ie .w or .a or.s ....(see index.html)specific class name
     activeButton.classList.add("pressed"); //pressed class is already created in styles
                                            //.classList.add() adds class to the element(here to the button clicked)

     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },200) ;                    
                                
}