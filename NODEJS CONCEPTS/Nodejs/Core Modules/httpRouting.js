let entertainmentData  = {
    shows:{1:"bigboss",2:"Debate", 3:"Super Singer"},
    movies:{1:"lion King", 2:"jungle book", 3:"Vikram", 4:"Darbar"},
    sports: {1:"IPL Auction", 2:"Football", 3:"Hockey"}
}


let http = require('http')
//http://localhost:7000/shows
//http://localhost:7000/movies
//http://localhost:7000/sports
let appsserver = http.createServer((req,res)=>{
console.log(req.url)
if(req.url == "/shows")
    res.write(JSON.stringify(entertainmentData.shows))
else if(req.url == "/movies"){
    res.write(JSON.stringify(entertainmentData.movies))
}
    else if(req.url == "/sports"){
        res.write(JSON.stringify(entertainmentData.sports))
    }else{
        res.write("Invalid Route Path")
    }
    res.end();

})
appsserver.listen(8000, ()=> console.log("Server Running on Port 80000 ********"))