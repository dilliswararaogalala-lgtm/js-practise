#!/bin/zsh

# Check if a file argument was provided
if [ -z "$1" ]; then
  echo "Usage: ./viewimg.sh <path_to_image>"
  exit 1
fi

FILE=$1

# Check if the file exists
if [[ -f "$FILE" ]]; then
  # Use base64 to encode the image and send the Kitty protocol escape sequence
  # f=100 tells the terminal to expect a PNG/JPEG/GIF
  printf "\e_Ga=T,f=100;%s\e\\" "$(base64 < "$FILE")"
  echo "" # Add a newline for clean terminal output
else
  echo "Error: File '$FILE' not found."
  exit 1
fi