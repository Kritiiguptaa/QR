document.querySelector("h1").style.color="green";
document.querySelector("button").style.backgroundColor = "yellow";

document.querySelector("button").classList.add("invisible"); //see styles.css

document.querySelector("h1").classList.add("huge");//see styles.css

document.querySelector("h1").innerHTML; //type this on console...result: <strong>Hello</strong>
document.querySelector("h1").textContent;//type this on console...result: Hello

document.querySelector("h2").innerHTML="<em>Good Bye</em>";
document.querySelector("h3").textContent="<em>Good Bye</em>";

document.querySelector("a").getAttribute("href");//type this on console..result:https://www.google.com
document.querySelector("a").setAttribute("href", "https://www.netflix.com/browse");