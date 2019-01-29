const express = require('express');
const path = require('path');
const app = express();
const config = require('./env');
const port = config.port;
const crt = path.resolve(__dirname, `../${config.root}`);
const getData = require('./controllers/data');
const stats = path.join(__dirname, `../${config.root}/views/newYear`);

app.use('/', express.static(crt));
app.use('/data', getData);
app.use('/stats', express.static(stats));

app.listen(port, () => console.log(`App listening on port ${port}!`))