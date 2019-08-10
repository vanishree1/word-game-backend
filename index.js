const express = require('express');
const cors = require('cors');
const app = express();
const errorHandler = require('./_helpers/error_handlers');
var bodyParser = require("body-parser");

const AddWordsController = require('./controllers/AddWordController');
AddWordsController(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// global error handler
app.use(errorHandler);

app.listen(3000)