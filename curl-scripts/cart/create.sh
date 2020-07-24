#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "cart":{
      "owner": "'"${OWNERID}"'"
    }
  }'

echo
