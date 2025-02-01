const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.sendMessage);

module.exports = router;
