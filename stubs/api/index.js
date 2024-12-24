const router = require('express').Router();
const interestRouter = require('./interest');
module.exports = router;


const delay = 
    (ms = 1000) =>
    (req, res, next) => {
        setTimeout(next, ms);
    };

router.use(delay());
router.use('/interest', interestRouter);