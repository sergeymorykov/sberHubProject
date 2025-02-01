const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.getText);

module.exports = router;
