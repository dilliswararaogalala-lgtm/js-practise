#!/bin/zsh

echo "Welcom to Zsh Assistant"
echo "What is your name"
read NAME

echo "What is your age,$NAME"
read AGE

NEXT_YEAR=$(($AGE + 1))

echo "On next year, your age will be $NEXT_YEAR";