# merch-shelf-gap-detector

**Domain:** MERCH
**Port:** 8014

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8014

# Docker
docker build -t merch-shelf-gap-detector .
docker run -p 8014:8014 merch-shelf-gap-detector
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
