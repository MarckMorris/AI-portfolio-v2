# retail-assortment-agent

**Domain:** RETAIL
**Port:** 8001

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8001

# Docker
docker build -t retail-assortment-agent .
docker run -p 8001:8001 retail-assortment-agent
```

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /metrics` - Prometheus metrics
- `POST /predict` - Prediction endpoint
- `GET /info` - Service information

## Testing

```bash
pytest
```
