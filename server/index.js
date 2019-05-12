const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));