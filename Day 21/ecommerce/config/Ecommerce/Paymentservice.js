let express = require("express");

let app = express();

app.get("/payment", (req, res) => {
    res.send("Message from payment Services");
})

app.listen(7004, () => {
    console.log("Inventory Service is Running")
});