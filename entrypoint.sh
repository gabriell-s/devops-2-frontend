#!/bin/sh

# Cria um arquivo com as variáveis de ambiente
cat <<EOF > /app/dist/env.js
window.env = {
  VITE_API_URL: "${VITE_API_URL}"
}
EOF

# Inicia o servidor
exec http-server dist
