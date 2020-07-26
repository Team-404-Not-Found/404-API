#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/user-orders/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
