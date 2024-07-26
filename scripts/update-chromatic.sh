#!/bin/bash

# Rodar o Chromatic e capturar a saída do terminal
output=$(npx chromatic --project-token=$CHROMATIC_PROJECT_TOKEN)

# Extrair a URL da saída
url=$(echo "$output" | grep -oP 'View your Storybook at \K(https://[^\s]+)')

# Verificar se a URL foi extraída corretamente
if [ -z "$url" ]; then
  echo "Não foi possível encontrar a URL do Chromatic na saída."
  exit 1
fi

echo "URL do Chromatic encontrada: $url"

# Atualizar o README.md com a nova URL
readme="README.md"
temp_readme="README_temp.md"

# Substituir a URL antiga pela nova no README
sed "s|https://[^\)]+|$url|" $readme > $temp_readme

# Mover o README temporário para o README.md
mv $temp_readme $readme

echo "README.md atualizado com a nova URL do Chromatic."
