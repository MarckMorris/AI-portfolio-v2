# merch-returns-analyzer

**Domain:** MERCH
**Port:** 8011

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8011

# Docker
docker build -t merch-returns-analyzer .
docker run -p 8011:8011 merch-returns-analyzer
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
