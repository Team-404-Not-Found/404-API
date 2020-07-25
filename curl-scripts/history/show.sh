#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_PATH="/user-history/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \

echo
