"""Backend API tests for Surya Panav Portfolio."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://surya-showcase-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Root endpoint ---
class TestRoot:
    def test_root_returns_message(self, client):
        r = client.get(f"{API}/", timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert "message" in data
        assert "portfolio" in data["message"].lower() or "surya" in data["message"].lower()


# --- Contact form ---
class TestContact:
    def test_create_contact_message_and_persist(self, client):
        payload = {
            "name": "TEST_User",
            "email": "test_user@example.com",
            "subject": "TEST_Hello",
            "message": "TEST_This is a backend integration test message."
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200, f"Unexpected status {r.status_code}: {r.text}"
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["subject"] == payload["subject"]
        assert data["message"] == payload["message"]
        assert "timestamp" in data

        # GET verify persistence
        r2 = client.get(f"{API}/contact", timeout=20)
        assert r2.status_code == 200
        msgs = r2.json()
        assert isinstance(msgs, list)
        assert any(m.get("id") == data["id"] and m.get("email") == payload["email"] for m in msgs), \
            "Created contact message not found in GET /api/contact"

    def test_contact_optional_subject(self, client):
        payload = {
            "name": "TEST_NoSubject",
            "email": "nosubj@example.com",
            "message": "TEST_message without subject"
        }
        r = client.post(f"{API}/contact", json=payload, timeout=20)
        assert r.status_code == 200
        data = r.json()
        assert data["subject"] == ""
        assert data["name"] == payload["name"]

    def test_contact_missing_required_field_returns_422(self, client):
        # missing 'message'
        r = client.post(f"{API}/contact", json={"name": "TEST_x", "email": "x@x.com"}, timeout=20)
        assert r.status_code == 422

    def test_get_contact_returns_list_without_mongo_id(self, client):
        r = client.get(f"{API}/contact", timeout=20)
        assert r.status_code == 200
        msgs = r.json()
        assert isinstance(msgs, list)
        if msgs:
            for m in msgs[:5]:
                assert "_id" not in m, "Mongo _id should be excluded from response"
                assert "id" in m
                assert "email" in m
