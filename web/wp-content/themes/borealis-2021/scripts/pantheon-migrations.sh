#!/usr/bin/env bash

# Script to run migrations
# To run call pantheon-migrations $SITE_NAME $ORIGINAL $DESINATION

SITE_NAME=$1
ORIGINAL=$2
DESTINATION=$3

echo "Migrating the $SITE_NAME database from $ORIGINAL to $DESTINATION..."
  
terminus wp ${SITE_NAME}.${DESTINATION} -- search-replace ${ORIGINAL}-${SITE_NAME}.pantheonsite.io ${DESTINATION}-${SITE_NAME}.pantheonsite.io --url=${ORIGINAL}-${SITE_NAME}.pantheonsite.io --network