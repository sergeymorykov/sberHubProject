const router = require('express').Router();

module.exports = router;

const data = require('./data/users.json');

router.get('/', (req, res) => {
    //res.status(500).send({
    //    message: 'Internal server error'
    //});
    res.json(data)
});

router.get('/:id', (req, res) => {
    //res.status(500).send({
    //    message: 'Internal server error'
    //});
    const userId = parseInt(req.params.id);
    res.json(data.find(item => item.id = userId));
});

router.post('/', (req, res) => {
    //res.status(500).send({
    //    message: 'Internal server error'
    //});
    const data = req.body;


    res.status(200).send();
});

router.put('/:id', (req, res) => {
    //res.status(500).send({
    //    message: 'Internal server error'
    //});
    const userId = parseInt(req.params.id);
    const data = req.body;
    res.status(200).send();
});