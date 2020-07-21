const express = require('express')

const stripe = require('stripe')('sk_test_51H7DjEJ3lyWOxdaDKOon2ojxqTdQnpXqsSazfDvGTJwamESKWaJ0TH9UwoH9i9woBAIlq9zTYuHnF4PDRLxO6biD00fE1UqvSl')

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
