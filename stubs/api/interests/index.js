const router = require('express').Router();

module.exports = router;

const data = require('./data/interest.json');

router.get('/', (req, res) => {
  res.json(data);
});
