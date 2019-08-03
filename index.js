const express = require('express');
const app = express();
const errorHandler = require('./_helpers/error_handlers');

const AddWordsController = require('./controllers/AddWordController');
AddWordsController(app);

// global error handler
app.use(errorHandler);

app.listen(3000)