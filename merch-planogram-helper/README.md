# merch-planogram-helper

**Domain:** MERCH
**Port:** 8009

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8009

# Docker
docker build -t merch-planogram-helper .
docker run -p 8009:8009 merch-planogram-helper
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
