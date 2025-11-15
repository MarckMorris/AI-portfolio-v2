# retail-a11y-review

**Domain:** RETAIL
**Port:** 8007

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8007

# Docker
docker build -t retail-a11y-review .
docker run -p 8007:8007 retail-a11y-review
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
