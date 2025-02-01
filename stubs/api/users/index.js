const router = require('express').Router();

module.exports = router;

const data = require('./data/users.json');

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:pageSize/:page', (req, res) => {
  const pageSize = parseInt(req.params.pageSize);
  const page = parseInt(req.params.page);
  res.json(data.slice(pageSize * (page - 1), pageSize * page));
});

router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.json(data.find((item) => item.id === userId));
});

router.post('/', (req, res) => {
  res.status(201).send();
});

router.post('/:to_id/:action/:from_id', (req, res) => {
  const to_id = parseInt(req.params.to_id);
  const from_id = parseInt(req.params.from_id);
  const action = req.params.action;
  /*
  if (data.findIndex((item) => item.id === to_id) === -1 || data.findIndex((item) => item.id === from_id) === -1) {
    res.status(404).send();
    return;
  }
    */
  if (action !== 'like' && action !== 'dislike') {
    res.status(400).send({ error: 'Invalid action' });
    return;
  }

  res.status(201).send({ message: `${action} action processed` });
});

router.put('/:id', (req, res) => {
  res.status(204).send();
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});
