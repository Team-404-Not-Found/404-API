#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com/"
URL_PATH="/carts"
cartId="5f15cf26b527f115e7061dd4"

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
