const mongoose = require('mongoose')
const productSchema = require('./productSchema')

const cartSchema = new mongoose.Schema({
  products: [productSchema],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

module.exports = mongoose.model('Cart', cartSchema)
