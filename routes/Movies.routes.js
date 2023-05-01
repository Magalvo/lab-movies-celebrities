// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

// all your routes here

router.get('/movies', async (req, res) => {
  const movies = await Movie.find().populate('cast');
  try {
    console.log('Got it');
    res.render('movies/movies', { movies });
  } catch (e) {
    console.log(e);
  }
});

router.get('/movies/create', async (req, res) => {
  const celebrity = await Celebrity.find(req.params.id).populate('cast');
  res.render('movies/new-movie', { celebrity });
});

router.post('/movies/create', async (req, res) => {
  const { title, genre, plot, cast } = req.body;
  await Movie.create({ title, genre, plot, cast });
  res.redirect('movies/movies');
});

module.exports = router;
