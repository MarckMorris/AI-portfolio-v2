#!/bin/bash

if [ -z "$1" ]; then
    echo "Uso: bash scripts/test-service.sh <puerto>"
    echo "Ejemplo: bash scripts/test-service.sh 8001"
    exit 1
fi

PORT=$1
URL="http://localhost:${PORT}"

echo "🧪 Probando servicio en puerto $PORT..."
echo ""

echo "1️⃣  Health Check:"
curl -s "${URL}/health" | jq '.'
echo ""

echo "2️⃣  Service Info:"
curl -s "${URL}/info" | jq '.'
echo ""

echo "3️⃣  Test Prediction:"
curl -s -X POST "${URL}/predict" \
  -H "Content-Type: application/json" \
  -d '{"test": "data", "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"}' | jq '.'
echo ""

echo "4️⃣  Metrics Sample:"
curl -s "${URL}/metrics" | head -n 20
echo ""
echo "✅ Test completado"
