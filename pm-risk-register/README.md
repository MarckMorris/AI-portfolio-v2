# pm-risk-register

**Domain:** PM
**Port:** 8020

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8020

# Docker
docker build -t pm-risk-register .
docker run -p 8020:8020 pm-risk-register
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
