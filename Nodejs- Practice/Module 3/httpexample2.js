var http = require('http');
var server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url == '/home') {
        res.write("<h1>Home Page Opened</h1> ");
        res.write("<p>Page By Rohit</p>");
        res.end();
    }
    else if (req.url == '/contact') {
        res.write("<h1>Contact Page Opened</h1> ");
        res.write("<p>Page By Rohit</p>");
        res.end();
    }
    else if (req.url == '/resume') {
        res.write("<h1>Resume Page Opened </h1> ");
        res.write("<p>Page By Rohit</p>");
        res.end();
    } else {
        res.write("<h1>Invalid Page </h1> ");
        res.write("<p>Page By Rohit</p>");
        res.end();
    }


})
server.listen(4000, () => console.log("Server is listening at port no 4000"));