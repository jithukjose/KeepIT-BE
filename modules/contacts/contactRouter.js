const express = require('express');
const { auth } = require('../../middlewares/securityMiddleware')

const router = express.Router();
const { getContacts, postContacts, getContactsWithId, deleteContacts, editContacts } = require('./contactService');

router.get('/', auth, getContacts);
router.post('/', auth, postContacts);
router.get('/:contactId', auth, getContactsWithId);
router.delete('/:contactId', auth, deleteContacts);
router.put('/:contactId', auth, editContacts)

module.exports = router; 