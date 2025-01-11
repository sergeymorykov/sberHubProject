const router = require('express').Router();

module.exports = router;

const data = require('./data/users.json');

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.json(data.findOne((item) => (item.id = userId)));
});

router.post('/', (req, res) => {
  res.status(200).send();
});

router.put('/:id', (req, res) => {
  res.status(200).send();
})
