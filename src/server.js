const express = require('express');
const route = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(route);

app.listen(3333)