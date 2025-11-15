# merch-promo-optimizer

**Domain:** MERCH
**Port:** 8010

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8010

# Docker
docker build -t merch-promo-optimizer .
docker run -p 8010:8010 merch-promo-optimizer
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
