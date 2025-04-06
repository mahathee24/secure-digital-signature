import React, { useState } from "react";
import { loginUser, generateSignature, getSignatures } from "./api";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const [signatures, setSignatures] = useState([]);
  const [response, setResponse] = useState("");

  const handleLogin = async () => {
    const data = await loginUser(username, password);
    if (data.token) {
      setToken(data.token);
      setResponse("✅ Login successful!");
    } else {
      setResponse("❌ Login failed.");
    }
  };

  const handleGenerate = async () => {
    const data = await generateSignature(token, message);
    setResponse(data.message || "❌ Error generating signature.");
  };

  const handleFetch = async () => {
    const data = await getSignatures(token);
    if (data.signatures) {
      setSignatures(data.signatures);
      setResponse("✅ Signatures fetched!");
    } else {
      setResponse(data.error || "❌ Failed to fetch signatures.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>🔐 Digital Signature App</h2>

      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />{" "}
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <button onClick={handleLogin}>Login</button>
      </div>

      <br />
      <div>
        <textarea
          placeholder="Enter your message"
          rows={4}
          cols={50}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button onClick={handleGenerate} disabled={!token}>
          Generate Signature
        </button>{" "}
        <button onClick={handleFetch} disabled={!token}>
          Get My Signatures
        </button>
      </div>

      <br />
      <div>
        <strong>Status:</strong> {response}
      </div>

      <br />
      {signatures.length > 0 && (
        <div>
          <h3>📝 Your Signatures</h3>
          <ul>
            {signatures.map((sig, idx) => (
              <li key={idx}>
                <b>Message:</b> {sig.message} <br />
                <b>Signature:</b> {sig.signature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
