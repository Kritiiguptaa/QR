// $(document).ready(function(){
//     $("h1").css("color","red");
// });                             used when script tag under head tag

$("h1").css("color","red");        //used directly when script tag under body tag
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
$("h1").click(function() {          //adding eventListener
    $("h1").css("color","purple"); //clicking on h1 chqanges color from red to purple
});


$("h2").addClass("head2 margin head2i");  //space dekr jitni marzi classes add krte jao
                                   // for details of classes refer styles.css
$("h2").removeClass("head2i");    
console.log($("h2").hasClass("head2"));         
console.log($("h2").hasClass("head2i"));
console.log($("h2").attr("class"));   //since class also an attribute

$("h2").before("<button>Before button</button");
$("h2").after("<button>After button</button");
$("h2").prepend("<button>Prepend button</button");
$("h2").append("<button>Append button</button");


$("h3").text("bye3");

$("button").text("don't click");   //changes all text 
$("button").html("<em>hey</em>");  //innerhtml ki trh not only changes text but html bhi change kr deta
$("button").click(function(){     //selects all buttons and no need of for loop
 $("h1").css("color","blue");
});

console.log($("img").attr("src")); 
$("a").attr("href","https://www.youtube.com/");

$("input").keypress(function(event){
   console.log(event.key);
});


$(document).keypress(function(event){   //changes text of h4 acc to key pressed on keyboard
    $("h4").text(event.key);
});
$("h4").on("mouseover", function(){
    $("h4").css("color","pink");
});
$("h4").on("click", function(){
    $("h4").css("color","brown");
});


$("button").on("click",function(){
    $("h5").animate({opacity:0.5});                //similarly .fadeOut(),.hide(),.toggle(),.fadeToggle,.slideUp(),.slideToggle()
});                                  //.animate({opacity:0.5})
                                    // $("h5").show(); or $("h5").fadeIn(),.slideDown() shows again the text

$("button").on("click",function(){
$("h3").slideUp().slideDown().animate({opacity:0.5});                
});