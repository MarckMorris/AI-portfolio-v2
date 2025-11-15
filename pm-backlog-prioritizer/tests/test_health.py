from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health():
    response = client.get("/health")
    assert response.status_code == 200
    data = response.json()
    assert data["ok"] is True
    assert data["status"] == "healthy"
    assert data["service"] == "pm-backlog-prioritizer"

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "running"
    assert data["service"] == "pm-backlog-prioritizer"

def test_predict():
    response = client.post("/predict", json={"test": "data"})
    assert response.status_code == 200
    data = response.json()
    assert data["prediction"] == "OK"

def test_info():
    response = client.get("/info")
    assert response.status_code == 200
    data = response.json()
    assert "endpoints" in data
    assert len(data["endpoints"]) > 0
