#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/carts"
cartId="5f11dc9ace1a870017fc34d7"
ID="5f10e8f965a6560017178f87"

curl "${API}${URL_PATH}/${cartId}/item/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--data '{
  "product": {
    "name": "'"${NAME}"'",
    "price": "'"${PRICE}"'",
    "description": "'"${DESCRIPTION}"'",
    "imageUrl": "'"${IMAGEURL}"'",
    "category": "'"${CATEGORY}"'",
    "inCart": "'"${INCART}"'",
    "quantity": "'"${QUANTITY}"'",
    "seller": "'"${SELLER}"'"
  }
}'

echo
