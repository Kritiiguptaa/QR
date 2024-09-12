const fs = require("fs"); //file system

//Writing in a file
  fs.writeFile("message.txt","Hello from NodeJS",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });  

  //write a new file and saves in local computer
  //message.txt(path)file is created under 2.2 Native Modules itself as full path is not defined
  //Hello from.... is called (data)
  //at last i.e err or error is (CallBack)

//Reading a file
  fs.readFile("./message.txt","utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  });
  //read a file into terminal/console
  //path of file which is to be read(path)
  //if data is as a string use "utf8"(option)
  //callback the data or error accordingly(callback)
