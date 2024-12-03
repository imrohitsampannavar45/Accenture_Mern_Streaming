let entertainmentData  = {
    shows:{1:"bigboss",2:"Debate", 3:"Super Singer"},
    movies:{1:"lion King", 2:"jungle book", 3:"Vikram", 4:"Darbar"},
    sports: {1:"IPL Auction", 2:"Football", 3:"Hockey"},
    anime: {1:"Death Note", 2:"Naruto", 3:"Solo Levelling"}
}


let express = require('express')
let appsserver = express()

 appsserver.get("/shows", (req,res) => {
    res.write(JSON.stringify(entertainmentData.shows))
    res.end()
 }) 

 appsserver.get("/movies", (req,res) => {
    res.write(JSON.stringify(entertainmentData.movies))
    res.end()
 }) 

 appsserver.get("/anime", (req,res) => {
    res.write(JSON.stringify(entertainmentData.anime))
    res.end()
 }) 
 
 

 appsserver.get("/sports", (req,res) => {
    res.write(JSON.stringify(entertainmentData.sports))
    res.end()
 }) 
 

appsserver.listen(8000, ()=> console.log("Server Running on Port 80000 ********"))


//http://localhost:7000/shows
//http://localhost:7000/movies
//http://localhost:7000/sports