const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("enter: ",(input)=>{
    const id = parseInt(input);
    fs.readFile("employee.json","utf8",(err,data)=>{
        if(err){
            console.log("error");
        }
        else{
            const data = JSON.parse(data);
            const emp = data.employees.find(item => item.id==id);
        }
    });
});
