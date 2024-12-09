const express = require("express");
const app = express();

app.get('/fruits', (req, res) => {
    const fruits = ["Apple", "banana", "Strawberry", "Cherry"];
    if (req.query.limit >= 0) {
        res.send(fruits.slice(0, req.query.limit))
    } else {
        res.send(fruits)
    }
})


app.listen(3000, () => {
    console.log("Server is Listening at the Port of 3000");
})

