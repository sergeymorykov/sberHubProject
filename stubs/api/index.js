const router = require('express').Router();
const interestsRouter = require('./interests');
const usersRouter = require('./users');
module.exports = router;

const delay =
  (ms = 1000) =>
  (req, res, next) => {
    setTimeout(next, ms);
  };

router.use(delay());
router.use('/interests', interestsRouter);
router.use('/users', usersRouter);
router.use('/users/:id', usersRouter);
