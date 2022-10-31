const MoviesController = require("../controllers/moviesController");

module.exports = {
  main: (app) => {
    app.get('/api/filmes', MoviesController.getMovies);
    app.post('/api/filmes', MoviesController.addMovie)
  }
}


