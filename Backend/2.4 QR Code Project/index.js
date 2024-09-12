/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
// var qr = require('qr-image');
import qr from 'qr-image';
import fs from "fs";
inquirer
  .prompt([
    /* Pass your questions in here */
    {message:"Type in your URL",
     name:"URL"}  //see in npm inquirer that message is under the ques section n as it is an object so curly braces
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const url=answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    //to write text file
    fs.writeFile('URL.txt', url, (err) => {    //from site: nodejs--> file system--> write file
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 


  //in terminal
  //node index.js
  //type url
  //check qr_img.png