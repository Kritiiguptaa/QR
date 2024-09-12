//inspect-->sources-->new snippet-->index.js


//Math.floor() rounds off the number
//Math.random() gives random no.s from 0 to less than 1 

//arrays1
var guestlist=["abc","def","ghi"];//array
var guestname=prompt("what is your name?"); //if we dont add var n directly write prompt then the input will not be saved
if(guestlist.includes(guestname)){   //checks if guestlist includes that particular guestname
    alert("Welcome:)");
}
else{
    alert("Try next time:(");
}

//arrays2
var output=[];
var count=1;
function fizzbuzz(){
    output.push(count);
    count++;
    
    console.log(output);
}
//in console we type fizzbuzz(); every time the array inc by 1


//arrys3
var output=[];
var count=1;

function fizzbuzz(){
   
    if(count%3===0 && count%5===0){
        output.push("fizzbuzz");
   }
    else if(count%3===0){
        output.push("fizz");
    }
    else if(count%5===0){
         output.push("buzz");
    }
     
    else{
         output.push(count);
    }
     count++;

    console.log(output); //on console type  fizzbuzz();  result:1 2 fizz 4 buzz fizz...
}


var output=[];
var beers="bottles of beer on wall"
var beers2="bottles of beer"
var beers3="take one down and pass it around,"
var count=99;

function beer(){
   while(count>0){
        output.push(count + beers + beers2 + beers3 + (count-1) + beers);
        count--;
   }
    console.log(output);
}



var op=[];
    if(n===0){
        return op;
    }
    if(n===1){
        op.push(0);
        return op;
    }
    op.push(0);
    op.push(1);
    
    for(var i=2;i<n;i++){
        op.push(op[i-1]+op[i-2]);
    }
    return op;



    /////////////////////////////////
    var arr=[];
    for(var i=0;i<n;i++){
        if(i===0){
            arr.push(0);
        }
        else if(i===1){
            arr.push(1);
        }
        else{
            arr.push(arr[n-1]+arr[n-2]);
        }
    }
    ////////////////////
    function sayhi(to){
        console.log("hello, "+to);
    }
    sayhi("tom");

    output: hello, tom
    /////////////////////////////////////////

   objects in JS
     var housekeeper1={
        yearsOfExp:12,
        domainOfWork: ["bathroom","rooms","lobby"]
     }

     console.log(housekeeper1.yearsOfExp);
 //////////////////////////////

 function Housekeeper(yrsOfExp,namee,domain){
    this.yrsOfExp=yrsOfExp;
    this.namee=namee;
    this.domain=domain;
    this.clean= function(){
        alert("cleaning under process");
    }
 }
 var housekeeper1= new Housekeeper(9,"Tim",["bed","bathroom"]);
 var housekeeper2= new Housekeeper(5,"Jim",["loby","balcony"]);
 console.log(housekeeper1.namee);
 console.log(housekeeper2.yrsOfExp);



 /////////////////////////////
 JQuery
 //(its a library
 //for Eg )
 document.querySelector("h1")==JQuery("h1")==$("h1")

 this is required
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
 <script src="index.js"></script>

 //(https://jquery.com/ then go to downloads swipe down google CDN then top vala link)