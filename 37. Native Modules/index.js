const fs = require("fs");

fs.writeFile("message.txt", "Hello Node nitesh", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile("message.txt", "Hello Node Nitesh Kumar", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
fs.readFile("message.txt","utf8",(err,data)=>{
    if(err) throw err;
    console.log(data);
});
