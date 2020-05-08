/* eslint no-underscore-dangle: 0 */
const { db } = require('../db');

const config = require('../config');

module.exports = {
  async createContact(req, res) {
    try {
      const {
        name,
        phone,
      } = req.body;
      const insertContact = await db.insert({
        name,
        phone,
        crazy: true,
      });
      if (insertContact) {
        res.status(200).send({
          err: false,
          messages: [
            `Successfully created a contact for ${name} with number ${phone}`,
          ],
        });
        return;
      }
      res.status(403).send({
        err: true,
        messages: [
          'Unable to add a new contact',
        ],
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        err: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
  async getAllContacts(req, res) {
    try {
      const contacts = await db.list(config.db.DB_NAME);
      if (contacts) {
        const allContacts = contacts.rows.map(async (doc) => db.get(doc.id, {
          revs_info: true,
        }));
        const contactValues = await Promise.all(allContacts);
        console.log(contactValues);
        res.render('contacts', { contacts: contactValues });
        return;
      }
      res.status(404).send({
        err: true,
        messages: [
          'No records found',
        ],
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        err: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
  async viewContact(req, res) {
    try {
      const {
        id,
      } = req.params;
      const contact = await db.get(id, {
        revs_info: true,
      });
      if (contact) {
        res.status(200).send({
          err: false,
          messages: [
            'Successfully fetched contact',
          ],
          contact: JSON.stringify(contact),
        });
        return;
      }
      res.status(404).send({
        err: true,
        messages: [
          'No records found',
        ],
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        err: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
  async deleteContact(req, res) {
    try {
      const {
        id,
      } = req.params;
      const contact = await db.get(id);
      if (contact) {
        const deletedContact = await db.destroy(id, contact._rev);
        if (deletedContact) {
          res.status(200).send({
            err: false,
            messages: [
              'Successfully deleted contact',
            ],
          });
          return;
        }
      }
      res.status(404).send({
        err: true,
        messages: [
          'No contact to delete',
        ],
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({
        err: true,
        messages: [
          'Internal server error',
        ],
      });
    }
  },
};
