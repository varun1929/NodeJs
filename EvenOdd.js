const http = require("http")
const fs = require("fs")

console.log("Server Started");

http.createServer(function (request,response){

    const value = request.url.replace("/","");

    if(isNaN(value) || value == "")
    {
        try{
        switch(value)
        {
        case "even":
            response.write("Even File Content: " + fs.readFileSync('even.txt'));
            break;
    
        case "odd":
            response.write("Odd File Content: " + fs.readFileSync('odd.txt'));
            break;

        default:
        response.write("Blank or Invalid input in URL")
    }}
catch(error){
    response.write("File Not Found");
}}
    else{
        if (value % 2 == 0){
            fs.writeFileSync('even.txt', value + " ", { flag: 'a' });
            response.write("Even Number added: " + value);
        }
        else {
            fs.writeFileSync('odd.txt', value + " ", { flag: 'a' });
            response.write("Odd Number added: " + value);
        }
    }
    response.end();

}).listen(9999);
