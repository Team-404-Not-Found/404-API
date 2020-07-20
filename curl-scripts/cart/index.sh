#!/bin/sh

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/carts"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
