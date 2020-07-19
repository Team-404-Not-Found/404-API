const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  receiptNumber: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = orderSchema
