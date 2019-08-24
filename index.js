const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
var mongoose = require('mongoose');
var config = require('./config')
const errorHandler = require('./_helpers/error_handlers');
const AddWordsController = require('./controllers/AddWordController');

// app.use(express.json());
// app.use(bodyParser.json());
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true })
AddWordsController(app);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(cors());
// global error handler
app.use(errorHandler);

app.listen(3001)