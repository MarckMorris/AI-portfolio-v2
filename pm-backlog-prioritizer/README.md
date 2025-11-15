# pm-backlog-prioritizer

**Domain:** PM
**Port:** 8018

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8018

# Docker
docker build -t pm-backlog-prioritizer .
docker run -p 8018:8018 pm-backlog-prioritizer
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
