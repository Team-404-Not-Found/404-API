// Express docs: http://expressjs.com/en/api.html
const express = require('express')


// pull in Mongoose model for examples
const User = require('./../models/user')

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
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
// const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX

router.post('/orders/:id', (req, res, next) => {
  let orderHistory = req.body.order
  const userId = req.params.id

  User.findById(userId)
    // .then(res => console.log(res))
    // .then(handle404)
    .then(order => {
      order.orderHistory.push(orderHistory)
      return order.save()
    })
    // respond to succesful `create` with status 201 and JSON of new "cart"
    .then(order => {
      res.status(201).json({ order: order.toObject() })
    })
    .then(console.log('Order History Post Successful'))
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
}
)

module.exports = router
