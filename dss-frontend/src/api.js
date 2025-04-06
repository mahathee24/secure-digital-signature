const API_URL = "http://127.0.0.1:5000"; // Flask API base

export async function loginUser(username, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  return await res.json();
}

export async function generateSignature(token, message) {
  const res = await fetch(`${API_URL}/generate_signature`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ message }),
  });
  return await res.json();
}

export async function getSignatures(token) {
  const res = await fetch(`${API_URL}/get_signature`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
}
