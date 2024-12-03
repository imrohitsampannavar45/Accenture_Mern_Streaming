let express = require("express");
let app = express();


app.get("/details", (req, res) => {
    res.send("Message from Inventory Services");
})

app.listen(7003, () => {
    console.log("Inventory Service is Running")
})