#!/bin/bash

API="https://protected-gorge-91362.herokuapp.com"
URL_Path="/users/${ID}"

curl ${API}${URL_PATH} \
  --include \
  --request SHOW \
  --header "Content-Type: application/json" \

echo
