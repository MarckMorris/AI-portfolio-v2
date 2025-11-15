# pm-stakeholder-qa

**Domain:** PM
**Port:** 8019

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8019

# Docker
docker build -t pm-stakeholder-qa .
docker run -p 8019:8019 pm-stakeholder-qa
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
