const express = require('express');
const path = require('path');
const app = express();
const config = require('./env');
const port = config.port;
const crt = path.resolve(__dirname, '../crt');
const data = require('./controllers/data');

app.use('/', express.static(crt));
app.use('/data', getData);

app.listen(port, () => console.log(`App listening on port ${port}!`))