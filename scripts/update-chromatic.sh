#!/bin/bash

output=$(npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN)

url=$(echo "$output" | grep -oP 'View your Storybook at \K(https://[^\s]+)')

if [ -z "$url" ]; then
  echo "Não foi possível encontrar a URL do Chromatic na saída."
  exit 1
fi

echo "URL do Chromatic encontrada: $url"

readme="README.md"
temp_readme="README_temp.md"

sed "s|https://[^\)]+|$url|" $readme > $temp_readme

mv $temp_readme $readme

echo "README.md atualizado com a nova URL do Chromatic."
