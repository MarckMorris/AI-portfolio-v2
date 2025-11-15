# retail-replenishment-planner

**Domain:** RETAIL
**Port:** 8004

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8004

# Docker
docker build -t retail-replenishment-planner .
docker run -p 8004:8004 retail-replenishment-planner
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
