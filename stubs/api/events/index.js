const router = require('express').Router();

module.exports = router;

const data = require('./data/event.json');

router.get('/', (req, res) => {
  res.json(data);
});
