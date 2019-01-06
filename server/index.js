const express = require('express');
const path = require('path');
const app = express();
const config = require('./env');
const port = config.port;
const crt = path.resolve(__dirname, '../crt');

app.use('/', express.static(crt));

app.listen(port, () => console.log(`App listening on port ${port}!`))