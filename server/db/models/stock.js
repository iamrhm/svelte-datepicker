const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const stockSchema = new Schema(
  { date: String, close: Number }
)

const Stock = mongoose.model('stock', stockSchema)

module.exports = Stock;