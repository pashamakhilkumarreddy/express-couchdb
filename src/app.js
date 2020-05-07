const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const methodOverride = require('method-override');

const config = require('./config');

const app = express();

const PORT = config.server.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride());
app.use('/static', express.static(path.join(__dirname, 'public')));

require('./routes')(app);

app.listen(PORT, () => {
  console.info(`Application is running on ${PORT}`);
});