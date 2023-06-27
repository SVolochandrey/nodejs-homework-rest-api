const express = require('express');
const router = express.Router();
const { contacts: ctrl } = require('../../controllers');
const { validateBody, isValidId } = require('../../middleware');
const { schemas } = require('../../models/contact');

router.get('/', ctrl.getContacts);

router.get('/:contactId', isValidId, ctrl.getContactById);

router.post('/',validateBody(schemas.addSchema), ctrl.addContact);

router.put('/:contactId', isValidId, validateBody(schemas.addSchema), ctrl.updateContact);

router.patch('/:contactId/favorite', isValidId, validateBody(schemas.updateFavoriteSchemas), ctrl.updateFavorite)

router.delete('/:contactId', isValidId, ctrl.deleteContact);

module.exports = router;
