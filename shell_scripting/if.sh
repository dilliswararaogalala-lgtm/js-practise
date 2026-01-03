#!/bin/zsh

echo "enter the age"
read AGE
if [[ $AGE -ge 10 || $AGE -le 30 ]]; then echo "He is young";
else echo "He is old";
fi