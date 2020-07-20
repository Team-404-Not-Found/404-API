#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/products"
ID="5f10e3b265a6560017178f7e"

curl "${API}${URL_PATH}/${ID}" \
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
    "inStock": "'"${INSTOCK}"'",
    "quantity": "'"${QUANTITY}"'",
    "seller": "'"${SELLER}"'"
  }
}'

echo
