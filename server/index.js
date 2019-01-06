const express = require('express');
const path = require('path');
const app = express();
const config = require('./env');
const port = config.port;
const crt = path.resolve(__dirname, '../crt');
const login = require('./controllers/login');

app.use('/', express.static(crt));
app.post('/login', login);

app.listen(port, () => console.log(`App listening on port ${port}!`))