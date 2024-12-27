const router = require('express').Router();
const interestsRouter = require('./interests');
const usersRouter = require('./users');
module.exports = router;

router.use('/interests', interestsRouter);
router.use('/users', usersRouter);
router.use('/users/:id', usersRouter);