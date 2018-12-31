const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const crt = path.resolve(__dirname, '../crt');

app.use('/', express.static(crt));

app.listen(port, () => console.log(`App listening on port ${port}!`))