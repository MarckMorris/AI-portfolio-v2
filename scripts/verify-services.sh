#!/bin/bash
echo "🔍 Verificando estado de los 20 microservicios..."
echo ""

declare -A SERVICES=(
    ["Retail Assortment Agent"]="8001"
    ["Retail Pricing Simulator"]="8002"
    ["Retail Catalog Normalizer"]="8003"
    ["Retail Replenishment Planner"]="8004"
    ["Retail Product Matching"]="8005"
    ["Retail Customer Inquiry"]="8006"
    ["Retail A11y Review"]="8007"
    ["Merch Vendor Scorecard"]="8008"
    ["Merch Planogram Helper"]="8009"
    ["Merch Promo Optimizer"]="8010"
    ["Merch Returns Analyzer"]="8011"
    ["Merch Forecast Comparator"]="8012"
    ["Merch Content Enrichment"]="8013"
    ["Merch Shelf Gap Detector"]="8014"
    ["PM OKR Advisor"]="8015"
    ["PM PRD Writer"]="8016"
    ["PM Experiment Copilot"]="8017"
    ["PM Backlog Prioritizer"]="8018"
    ["PM Stakeholder QA"]="8019"
    ["PM Risk Register"]="8020"
)

HEALTHY=0
UNHEALTHY=0

for SERVICE_NAME in "${!SERVICES[@]}"; do
    PORT="${SERVICES[$SERVICE_NAME]}"
    
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT}/health 2>/dev/null)
    
    if [ "$RESPONSE" = "200" ]; then
        echo "✅ $SERVICE_NAME (port $PORT) - OK"
        ((HEALTHY++))
    else
        echo "❌ $SERVICE_NAME (port $PORT) - FAIL"
        ((UNHEALTHY++))
    fi
done

echo ""
echo "=========================================="
echo "📊 Resumen:"
echo "   ✅ Servicios Online: $HEALTHY / 20"
echo "   ❌ Servicios Offline: $UNHEALTHY / 20"
echo "=========================================="

if [ $UNHEALTHY -gt 0 ]; then
    echo ""
    echo "💡 Para ver logs de un servicio:"
    echo "   docker-compose logs [nombre_contenedor]"
    echo ""
    echo "📝 Nombres de contenedores:"
    echo "   retail_assortment, retail_pricing, retail_catalog, etc."
fi
