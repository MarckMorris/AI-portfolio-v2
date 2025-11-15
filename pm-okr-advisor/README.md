# pm-okr-advisor

**Domain:** PM
**Port:** 8015

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8015

# Docker
docker build -t pm-okr-advisor .
docker run -p 8015:8015 pm-okr-advisor
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
