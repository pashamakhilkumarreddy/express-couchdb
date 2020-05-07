const router = require('express').Router();

const { createDB } = require('../controllers');

router.post('/createdb', createDB);

module.exports = router;
