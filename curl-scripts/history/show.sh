#!/bin/bash

API="http://localhost:4741"
URL_Path="/users/${ID}"

curl ${API}${URL_PATH} \
  --include \
  --request SHOW \
  --header "Content-Type: application/json" \

echo
