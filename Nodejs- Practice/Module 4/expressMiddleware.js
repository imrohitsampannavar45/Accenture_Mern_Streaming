var express = require('express')
var app = express();


var requestTime = function (req, res, next) {
    req.requestTime = new Date()
    next()
}

app.use(requestTime)


app.get('/', (req, res) => {
    var responseText = 'Hello World <br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText);
})

app.listen(3000, () => console.log("Server Listening at 3000 "))