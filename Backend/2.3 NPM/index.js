//npm is like git
//initiate npm by typing npm init under the file path 
//then fill the details package.json gets added
//to install npm packages go to npm.js site
//then copy the installation code on the right and paste in terminal

//**if you want to use import then package.json must include type:module */

// import generateName from "sillyname";
// or var generateName = require("sillyname");
// var sillyName = generateName();

// console.log(`My name is ${sillyName}.`);

// import superheroes from "superheroes";
// const name = superheroes.random();
// console.log(`I am ${name}!`);


import superheroes from "superheroes";
const superheroesNames = superheroes.random();

console.log(superheroesNames);

