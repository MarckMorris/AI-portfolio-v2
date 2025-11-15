# merch-content-enrichment

**Domain:** MERCH
**Port:** 8013

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8013

# Docker
docker build -t merch-content-enrichment .
docker run -p 8013:8013 merch-content-enrichment
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
