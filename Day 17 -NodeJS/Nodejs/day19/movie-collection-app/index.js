const express = require("express");
const app = express()
const cors = require('cors');
const port = 4000;

app.use(cors());
app.use(express.json());


const movies = [
    { title: "Inception", director: 'Chistopher Nolan', year: 2010 },
    { title: "The Lion King", director: 'Unkonwn', year: 2002 },
    { title: "SpiderMan- Home Coming", director: 'Marvels ', year: 2020 },
];


app.get('/movies', (req, res) => {
    res.json(movies);
});

app.get('/movies/:title', (req, res) => {
    const title = req.params.title.toLowerCase();
    const movie = movies.find(m => m.title.toLowerCase() === title);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});

app.post('/movies', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

app.get('/search', (req, res) => {
    const title = req.query.title.toLowerCase();
    const results = movies.filter(m => m.title.toLowerCase().includes(title));
    res.json(results);
});



app.listen(port, () => {
    console.log(`Server is running on localhost ${port}`)
});