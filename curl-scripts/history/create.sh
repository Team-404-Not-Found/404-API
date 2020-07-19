#!/bin/bash

API="http://localhost:4741"
URL_PATH="/orders/${ID}"

curl ${API}${URL_PATH} \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "order": {
      "productId": "'"${PRODUCT_ID}"'",
      "name": "'"${NAME}"'",
      "imageUrl": "'"${IMAGE_URL}"'",
      "receiptNumber": "'"${REC_NUM}"'"
    }
  }'

echo
