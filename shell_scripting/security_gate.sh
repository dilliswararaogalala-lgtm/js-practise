#!/bin/zsh

zsh_password="pooji"
NO_TRIES=3;

echo "---Welcome to security gate---"

while [[ $NO_TRIES -gt 0 ]]; do
echo "Enter the password: (tries left) $NO_TRIES"
read ENTERED_PASSWORD

if [[ $ENTERED_PASSWORD == $zsh_password ]]; then
echo "Access granted Welcome! pro";
exit 0;

else 
echo "Wrong password";
NO_TRIES=$(( $NO_TRIES - 1 ));

fi

done