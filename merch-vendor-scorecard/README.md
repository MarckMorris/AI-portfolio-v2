# merch-vendor-scorecard

**Domain:** MERCH
**Port:** 8008

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8008

# Docker
docker build -t merch-vendor-scorecard .
docker run -p 8008:8008 merch-vendor-scorecard
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
