# retail-product-matching

**Domain:** RETAIL
**Port:** 8005

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8005

# Docker
docker build -t retail-product-matching .
docker run -p 8005:8005 retail-product-matching
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
