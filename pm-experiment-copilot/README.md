# pm-experiment-copilot

**Domain:** PM
**Port:** 8017

## Quickstart

```bash
# Development
uvicorn app.main:app --reload --port 8017

# Docker
docker build -t pm-experiment-copilot .
docker run -p 8017:8017 pm-experiment-copilot
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
