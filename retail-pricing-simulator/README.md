# retail-pricing-simulator

**Domain:** RETAIL
**Port:** 8002

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8002

# Docker
docker build -t retail-pricing-simulator .
docker run -p 8002:8002 retail-pricing-simulator
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
