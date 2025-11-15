# pm-prd-writer

**Domain:** PM
**Port:** 8016

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8016

# Docker
docker build -t pm-prd-writer .
docker run -p 8016:8016 pm-prd-writer
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
