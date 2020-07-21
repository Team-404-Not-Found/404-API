#!/bin/bash

API="http://localhost:4741"
URL_PATH="/carts"

curl "${API}${URL_PATH}/${cartId}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "item": {
      "id": "'"${ID}"'"
    }
  }'

echo
