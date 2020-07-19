const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    require: true,
    min: 1,
    max: 100
  },
  seller: {
    type: String,
    required: true
  },
  inCart: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = productSchema
