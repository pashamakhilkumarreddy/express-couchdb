const router = require('express').Router();

const { createContact, viewContact, deleteContact } = require('../controllers');

router.post('/contact', createContact);

router.get('/contact/:id', viewContact);

router.delete('/contact/:id', deleteContact);

module.exports = router;
