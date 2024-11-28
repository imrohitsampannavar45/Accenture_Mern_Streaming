const URL = 'http://localhost:4000';

async function listMovies() {
    const response = await fetch(`${URL}/movies`);
    const movies = await response.json();
    const movieList = document.getElementById('movie-list');
    movieList.innerHTML = '<h3>All Movies:</h3>' + movies.map(movie => `<p>${movie.title} (${movie.year}), directed by ${movie.director}</p>`).join('');
}

async function getMovieDetails() {
    const title = document.getElementById('movie-title').value;
    const response = await fetch(`${URL}/movies/${title}`);
    const data = await response.json();
    const movieDetails = document.getElementById('movie-details');
    movieDetails.innerHTML = `<p>${data.title} (${data.year}), directed by ${data.director}</p>`;

}
async function addMovie() {
    const title = document.getElementById('new-movie-title').value;
    const director = document.getElementById('new-movie-director').value;
    const year = document.getElementById('new-movie-year').value;
    const newMovie = { title, director, year: parseInt(year) };

    const response = await fetch(`${URL}/movies`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMovie)
    });
    const data = await response.json();
    alert(`Movie added: ${data.title}`);
    document.getElementById('new-movie-title').value = '';
    document.getElementById('new-movie-director').value = '';
    document.getElementById('new-movie-year').value = '';
}

async function searchMovies() {
    const title = document.getElementById('search-title').value;
    const response = await fetch(`${URL}/search?title=${title}`);
    const data = await response.json();
    const searchResults = document.getElementById('movie-search-results');
    searchResults.innerHTML = '<h3>Search Results:</h3>' + data.map(movie => `<p>${movie.title} (${movie.year}), directed by ${movie.director}</p>`).join('');
}
