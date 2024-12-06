const expresss = require('express')
const app = expresss();

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');

})

app.get('/contact', (req, res) => {
    const contactList = ['8431455095', '9972946042', '7026965692'];
    res.send(contactList)
})


app.get('/location', (req, res) => {
    const location = { name: "Accenture ", loc: "BDC" }
    res.send(location);
})


app.post("/", (req, res) => {
    res.send("<h1>Post Method is Called</h1>")
})



app.listen(3000, () => {
    console.log("Server Running at Port 3000")
})