const MoviesModel = require("../models/moviesModel");
const Joi = require('joi');

const schema = Joi.object().keys({
   name: Joi.string().required().min(1).max(50),
   director: Joi.string().required().min(1).max(50),
   link: Joi.string().required().min(1).max(150)
});



module.exports = class MoviesController {

   static async getMovies(req, res, next) {
      console.log('[Movies Controller] getMovies');
      try {
         const movies = await MoviesModel.getMovies();
         if (!movies) {
            res.status(404).json(`Não existe filme cadastrado.`);
         }
         movies.forEach(movie => {
            console.log(`[Movie controller: retorno do banco] ${movie.name}`);
         });
         res.status(200).json(movies);
      } catch (error) {
         console.log(`[Movies Controller Error] ${error}`);
         res.status(500).json({ error: error })
      }
   }


   static async addMovie(req, res, next) {
      console.log('[Add Movie Controller]', req.body);
      try {
         const addedMovie = await MoviesModel.addMovie(req.body);
         res.status(200).json(addedMovie);
      } catch (error) {
         res.status(500).json({ error: error });
      }
   }
}

