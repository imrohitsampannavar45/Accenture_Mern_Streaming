const express = require("express");
const app = express()


var blocks = {
    'fixed': "New Fixed",
    "move": "New Move",
    "rotate": "New rotate"
}

app.get("/blocks/:name", (req, res) => {
    var description = blocks[req.params.name];
    if (!description) {
        res.status(404).send("No Description for the" + req.params.name);
    } else {
        res.send(description)
    }
})

app.listen(3000, () => {
    console.log("Server Running At 3000")
})