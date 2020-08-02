// Express docs: http://expressjs.com/en/api.html
const express = require('express')
const mongoose = require('mongoose')

// pull in Mongoose model for examples
const Cart = require('../models/cart_model')
const productSchema = require('../models/productSchema')
const Product = mongoose.model('Product', productSchema)

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
// const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
// const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// CREATE
// POST /products
router.post('/carts/:id', (req, res, next) => {
  let productData
  const productId = req.body.item.id
  const cartId = req.params.id
  if (productId) {
    Product.findById(productId)
      .then(handle404)
      .then(res => {
        productData = res
        return res
      })
      .then(() => console.log(productData))
      .catch(next)

    Cart.findById(cartId)
      .then(handle404)
      .then(cart => {
        cart.products.push(productData)
        return cart.save()
      })
      // respond to succesful `create` with status 201 and JSON of new "cart"
      .then(cart => {
        res.status(201).json({ cart: cart.toObject() })
      })
      // if an error occurs, pass it off to our error handler
      // the error handler needs the error message and the `res` object so that it
      // can send an error message back to the client
      .catch(next)
  }
})

// PATCH
// PATCH / cart
router.patch('/carts/:id/item/:item_id', (req, res, next) => {
  let productData
  const cartId = req.params.id
  const productId = req.params.item_id
  if (cartId) {
    Cart.findById(cartId)
      .then(handle404)
      .then(res => {
        console.log(res.product.id(productId))
        return res.save()
      })
      .then(() => console.log(productData))
      .catch(next)
  }
})

// DESTROY
// DELETE
router.delete('/carts/:id/item/:item_id', (req, res, next) => {
  // console.log(req.body)
  const productId = req.params.item_id
  Cart.findById(req.params.id)
    .then(cart => {
      cart.products.id(productId).remove()
      return cart.save()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)

  // Product.findById(productId)
})

router.delete('/carts/:id', (req, res, next) => {
  // console.log(req.body)
  Cart.findOne({ owner: req.params.id })
    .then(cart => {
      cart.products.$pop()
      return cart.save()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)

  // Product.findById(productId)
})

module.exports = router
