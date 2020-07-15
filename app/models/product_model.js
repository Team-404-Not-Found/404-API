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
  inStock: {
    type: Boolean,
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
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
