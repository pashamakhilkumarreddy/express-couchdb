const {
  nanoDB,
} = require('../db');

module.exports = {
  async createDB(req, res) {
    try {
      const {
        dbname,
      } = req.body;
      if (dbname) {
        const newDB = await nanoDB.db.create(dbname);
        if (newDB) {
          res.status(200).send({
            err: false,
            messages: [`Successfully created the db ${dbname}`],
          });
          return;
        }
      }
      res.status(403).send({
        err: false,
        messages: ['Unable to create the db'],
      });
      return;
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
