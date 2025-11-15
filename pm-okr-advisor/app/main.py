from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
from prometheus_client import generate_latest, CONTENT_TYPE_LATEST, Counter, Histogram
import time
import os

app = FastAPI(
    title="pm-okr-advisor",
    description="Walmart AI Portfolio - PM Domain",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, especificar dominios exactos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Prometheus Metrics
REQUEST_COUNT = Counter(
    "app_requests_total", 
    "Total HTTP requests", 
    ["method", "endpoint", "status"]
)
REQUEST_LATENCY = Histogram(
    "app_request_latency_seconds", 
    "Request latency in seconds", 
    ["endpoint"]
)

@app.middleware("http")
async def metrics_middleware(request, call_next):
    start_time = time.time()
    response = await call_next(request)
    duration = time.time() - start_time
    
    REQUEST_COUNT.labels(
        method=request.method,
        endpoint=request.url.path,
        status=response.status_code
    ).inc()
    
    REQUEST_LATENCY.labels(endpoint=request.url.path).observe(duration)
    
    return response

@app.get("/")
async def root():
    return {
        "service": "pm-okr-advisor",
        "domain": "PM",
        "status": "running",
        "version": "1.0.0",
        "port": 8015
    }

@app.get("/health")
async def health():
    return {
        "ok": True,
        "status": "healthy",
        "service": "pm-okr-advisor",
        "domain": "PM",
        "port": 8015
    }

@app.get("/metrics")
async def metrics():
    return Response(
        generate_latest(), 
        media_type=CONTENT_TYPE_LATEST
    )

@app.post("/predict")
async def predict(payload: dict):
    """
    Endpoint de predicción genérico.
    Cada microservicio implementará su lógica específica.
    """
    return {
        "service": "pm-okr-advisor",
        "domain": "PM",
        "input": payload,
        "prediction": "OK",
        "message": "Service is operational. Implement specific logic here."
    }

@app.get("/info")
async def info():
    return {
        "service": "pm-okr-advisor",
        "domain": "PM",
        "port": 8015,
        "endpoints": [
            {"path": "/", "method": "GET", "description": "Root endpoint"},
            {"path": "/health", "method": "GET", "description": "Health check"},
            {"path": "/metrics", "method": "GET", "description": "Prometheus metrics"},
            {"path": "/predict", "method": "POST", "description": "Prediction endpoint"},
            {"path": "/info", "method": "GET", "description": "Service information"}
        ],
        "description": "AI-powered microservice for Walmart operations"
    }
