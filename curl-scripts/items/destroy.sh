#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/carts"
cartId="5f11dc9ace1a870017fc34d7"
ID="5f10e3b265a6560017178f7e"

curl "${API}${URL_PATH}/${cartId}/item/${ID}" \
  --include \
  --request DELETE \

echo
