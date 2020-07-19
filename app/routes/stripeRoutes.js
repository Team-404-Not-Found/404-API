const express = require('express')

const stripe = require('stripe')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const removeBlanks = require('../../lib/remove_blank_fields')

const router = express.Router()

router.post('/pay', (req, res, next) => {
  const {email} = req.body

  stripe.paymentIntents.create({
    ammount: 1000,
    currentcy: 'usd',
    metadata: {integration_check: 'accept_a_payment'},
    recepient_email: email
  })
    .then(res => res.json({'client_secret': paymentIntent['client_secret']}))
})

module.exports = router
