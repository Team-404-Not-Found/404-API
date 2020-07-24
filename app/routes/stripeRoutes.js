const express = require('express')

const stripe = require('stripe')('sk_test_51H6kFYHJE1XkBAfR517a7FNLn4PXCPbuIxGalk4jBc1rWNOhDSglqYIqabndBWPR1peAZDp5r9ViE6AZtZHPGVZk00jW627iWY')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const removeBlanks = require('../../lib/remove_blank_fields')

const router = express.Router()

router.post('/pay', async (req, res) => {
  let {email, amount} = req.body
  amount *= 100
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'},
    receipt_email: email
  })
  res.json({'client_secret': paymentIntent['client_secret']})
})

module.exports = router
