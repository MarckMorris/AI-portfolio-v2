# retail-customer-inquiry

**Domain:** RETAIL
**Port:** 8006

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8006

# Docker
docker build -t retail-customer-inquiry .
docker run -p 8006:8006 retail-customer-inquiry
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
