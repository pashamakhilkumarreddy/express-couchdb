const dbControllers = require('./dbController');
const contactsController = require('./contactsController');

module.exports = {
  ...dbControllers,
  ...contactsController,
};
