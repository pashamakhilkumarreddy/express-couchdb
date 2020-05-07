module.exports = {
  async createDB(req, res) {
    try {
      const {
        dbname,
      } = req.body;
      if (dbname) {
        console.log(dbname);
      }
      res.status(200).send({
        err: false,
        messages: ['Successfully created the db'],
      });
    } catch (err) {
      console.error(err);
    }
  },
};
