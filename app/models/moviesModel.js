const client = require('../../config/dbConnection');

module.exports = class MoviesModel {

    static async getMovies() {
        console.log(`[getallmovies]`);
        const cursor = await client.db("dsw").collection("movies").find();
        // console.log(`[Movie Model get all movies: cursor] ${cursor}`);
        const movies = await cursor.toArray();
        // console.log(`[Movie Model get all movies: results] ${results}`);
        return movies;
    }


    static async addMovies(data) {
        console.log(`[Movie Model - Add Movie] ${data}`);
        try {
            const newMovie = { name: data.name, director: data.director, link: data.link,
                date: new Date()
            }
            const addedMovie = await client.db("dsw").collection("movies").insertOne(newMovie);
            console.log(`New movie inserted with the following id ${addedMovie.insertedId}`);
            return addedMovie;
        } catch (error) {
            console.log(`[movieService] Error: ${error}`);
        } 
    }

}



