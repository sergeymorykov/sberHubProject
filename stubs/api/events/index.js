const router = require('express').Router();

module.exports = router;

const data = require('./data/event.json');
const users_data = require('../users/data/users.json');

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:pageSize/:page', (req, res) => {
  const pageSize = parseInt(req.params.pageSize);
  const page = parseInt(req.params.page);
  res.json(data.slice(pageSize * (page - 1), pageSize * page));
});

router.post('/', (req, res) => {
  res.status(201).send();
});

router.delete('/:id', (req, res) => {
  res.status(204).send();
});

router.post('/:user_id/:action/:id', (req, res) => {
  const user_id = parseInt(req.params.user_id);
  const id = parseInt(req.params.id);
  const action = req.params.action;
  if (users_data.findIndex((item) => item.id === user_id) === -1 || data.findIndex((item) => item.id === id) === -1) {
    res.status(404).send();
    return;
  }
  if (action !== 'participate' && action !== 'refuse') {
    res.status(400).send({ error: 'Invalid action' });
    return;
  }

  res.status(201).send({ message: `${action} action processed` });
});