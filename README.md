# 🏪 Walmart AI Portfolio

Portafolio completo de 20 microservicios de IA para operaciones de retail.

## 🎯 Arquitectura

- **20 Microservicios FastAPI** (puertos 8001-8020)
- **Frontend React + Vite** (puerto 3000)
- **Prometheus** para métricas (puerto 9090)
- **Grafana** para visualización (puerto 3001)

## 🚀 Inicio Rápido

```bash
# 1. Iniciar todos los servicios
bash scripts/start-all.sh

# 2. Verificar que estén corriendo
bash scripts/verify-services.sh

# 3. Acceder al sistema
# Frontend: http://localhost:3000
# Prometheus: http://localhost:9090
# Grafana: http://localhost:3001 (admin/admin)
```

## 📊 Servicios Disponibles

### RETAIL (7 servicios)
- `8001` - Retail Assortment Agent
- `8002` - Retail Pricing Simulator
- `8003` - Retail Catalog Normalizer
- `8004` - Retail Replenishment Planner
- `8005` - Retail Product Matching
- `8006` - Retail Customer Inquiry
- `8007` - Retail A11y Review

### MERCHANDISING (7 servicios)
- `8008` - Merch Vendor Scorecard
- `8009` - Merch Planogram Helper
- `8010` - Merch Promo Optimizer
- `8011` - Merch Returns Analyzer
- `8012` - Merch Forecast Comparator
- `8013` - Merch Content Enrichment
- `8014` - Merch Shelf Gap Detector

### PRODUCT MANAGEMENT (6 servicios)
- `8015` - PM OKR Advisor
- `8016` - PM PRD Writer
- `8017` - PM Experiment Copilot
- `8018` - PM Backlog Prioritizer
- `8019` - PM Stakeholder QA
- `8020` - PM Risk Register

## 🧪 Probar Servicios

```bash
# Probar un servicio específico
bash scripts/test-service.sh 8001

# Ver logs
docker-compose logs -f retail-assortment-agent

# Reiniciar un servicio
docker-compose restart retail-assortment-agent
```

## 🛑 Detener Sistema

```bash
# Detener todos los servicios
docker-compose down

# Detener y limpiar volúmenes
docker-compose down -v
```

## 📝 API Endpoints

Cada microservicio expone:
- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /info` - Service information
- `GET /metrics` - Prometheus metrics
- `POST /predict` - Prediction endpoint

## 🔧 Desarrollo

```bash
# Entrar a un servicio
cd retail-assortment-agent

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar tests
pytest

# Ejecutar en modo desarrollo
uvicorn app.main:app --reload --port 8001
```

## 📈 Monitoreo

- **Prometheus**: http://localhost:9090/targets
- **Grafana**: http://localhost:3001
  - Usuario: `admin`
  - Password: `admin`
  - Dashboard pre-configurado: "Walmart AI Services Dashboard"

## 🏗️ Estructura del Proyecto

```
walmart-ai-portfolio/
├── retail-assortment-agent/
├── retail-pricing-simulator/
├── ... (18 servicios más)
├── frontend/
├── monitoring/
│   ├── prometheus.yml
│   └── grafana-provisioning/
├── scripts/
│   ├── start-all.sh
│   ├── verify-services.sh
│   └── test-service.sh
└── docker-compose.yml
```

## 📜 Licencia

Apache 2.0 © 2025 Walmart AI Portfolio
