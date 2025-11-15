# retail-catalog-normalizer

**Domain:** RETAIL
**Port:** 8003

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8003

# Docker
docker build -t retail-catalog-normalizer .
docker run -p 8003:8003 retail-catalog-normalizer
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
