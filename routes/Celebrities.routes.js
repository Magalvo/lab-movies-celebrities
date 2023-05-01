// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model');

// all your routes here
router.get('/celebrities', async (req, res) => {
  const celebrities = await Celebrity.find();
  try {
    console.log('Got it');
    res.render('celebrities/celebrities', { celebrities });
  } catch (e) {
    console.log(e);
  }
});

router.get('/celebrities/create', async (req, res) => {
  const celebrities = await Celebrity.find();
  res.render('celebrities/new-celebrity', { celebrities });
});

router.post('/celebrities/create', async (req, res) => {
  const { name, occupation, catchPhrase } = req.body;
  await Celebrity.create({ name, occupation, catchPhrase });
  res.redirect('/celebrities');
});

module.exports = router;
