const dbroutes = require('./dbroutes');
const contactRoutes = require('./contactRoutes');

module.exports = (app) => {
  app.use('/', dbroutes);
  app.use('/', contactRoutes);
  app.get('/', (req, res) => {
    res.render('index', { title: 'Express CouchDB' });
  });
};
