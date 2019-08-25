var mongoose = require('mongoose')

var Schema = mongoose.Schema

var dictionarySchema = new Schema({
    word: String,
    meaning: String,
    antonym: String,
    synonym: String,
    sentence: String,
    image: String
})

var dictionaryModel = mongoose.model('dictionary', dictionarySchema)

module.exports = dictionaryModel