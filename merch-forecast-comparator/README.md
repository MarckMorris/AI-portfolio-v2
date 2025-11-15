# merch-forecast-comparator

**Domain:** MERCH
**Port:** 8012

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8012

# Docker
docker build -t merch-forecast-comparator .
docker run -p 8012:8012 merch-forecast-comparator
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
