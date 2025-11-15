#!/bin/bash
echo "🚀 Iniciando Walmart AI Portfolio..."
echo ""
echo "⏳ Este proceso puede tomar 10-15 minutos la primera vez"
echo ""

# Build todos los servicios
echo "📦 Building servicios..."
docker-compose build

# Iniciar en orden
echo "🔧 Iniciando Prometheus y Grafana..."
docker-compose up -d prometheus grafana

echo "⚙️  Iniciando microservicios (20 servicios)..."
docker-compose up -d \
  retail-assortment-agent retail-pricing-simulator retail-catalog-normalizer \
  retail-replenishment-planner retail-product-matching retail-customer-inquiry \
  retail-a11y-review merch-vendor-scorecard merch-planogram-helper \
  merch-promo-optimizer merch-returns-analyzer merch-forecast-comparator \
  merch-content-enrichment merch-shelf-gap-detector pm-okr-advisor \
  pm-prd-writer pm-experiment-copilot pm-backlog-prioritizer \
  pm-stakeholder-qa pm-risk-register

echo "⏳ Esperando que los servicios estén listos (30 segundos)..."
sleep 30

echo "🎨 Iniciando Frontend..."
docker-compose up -d frontend

echo ""
echo "✅ ¡Sistema iniciado!"
echo ""
echo "📊 Accesos:"
echo "   🌐 Frontend:    http://localhost:3000"
echo "   📈 Prometheus:  http://localhost:9090"
echo "   📊 Grafana:     http://localhost:3001 (admin/admin)"
echo ""
echo "🔍 Verificar servicios:"
echo "   bash scripts/verify-services.sh"
echo ""
echo "📋 Ver logs:"
echo "   docker-compose logs -f [nombre_servicio]"
echo ""
echo "🛑 Detener todo:"
echo "   docker-compose down"
