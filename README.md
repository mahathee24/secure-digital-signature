# Digital Signature Standard (DSS) - Full Stack App

## 🔐 Overview
This project demonstrates a **full-stack implementation** of the Digital Signature Standard (DSS), combining a secure backend with a responsive frontend interface. It allows users to register, log in, generate digital signatures, and verify them through a web interface.

## ✨ Features
- ✅ User Registration & Login with JWT Authentication
- ✍️ Digital Signature Generation (RSA-2048 + SHA-256 + PSS)
- 🔍 Signature Verification
- 💾 Secure MongoDB Storage for Credentials & Signatures
- 🌐 Web Interface built with React (Frontend)
- 🔐 Password Hashing with PBKDF2
- 🔄 Token-Based Authentication via JWT

## 🛠 Technologies Used

### Backend (Python)
- **Flask** – Web framework
- **PyMongo** – MongoDB integration
- **Flask-JWT-Extended** – JWT authentication
- **Cryptography** – Digital signatures
- **Werkzeug** – Password hashing

### Frontend (React)
- **React.js** – UI framework
- **Fetch API** – Communicate with backend
- **Tailwind CSS** (optional for styling)

### Database
- **MongoDB** – Stores users & digital signatures

---

## 🗂️ Project Structure

```
ain -> main (forced update)
DSS_MK_INS/
├── api.py                  # Main Flask app with API routes
├── generate_signature.py   # Signature creation logic
├── verify_signature.py     # Signature verification logic
├── fetch_signatures.py     # Fetching stored signatures
├── mongodb_connection.py   # DB connector
├── register_user.py        # Manual user registration script
├── test_mongo.py           # MongoDB connection test
├── database.py             # DB utility functions (optional)
├── dss.py                  # Placeholder for core DSS logic
├── dss-frontend/           # React frontend app
│   ├── src/
│   │   ├── App.js          # Main component
│   │   ├── api.js          # API calls to backend
│   │   ├── index.js        # Entry point
│   │   ├── App.css         # Styles
│   │   └── ...
└── README.md               # Project docs
```

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Python 3.7+
- MongoDB (local, default port 27017)
- Node.js + npm (for frontend)

### 📦 Backend Setup
```bash
# Install required packages
pip install flask flask-jwt-extended pymongo cryptography werkzeug PyJWT flask-cors

# Start MongoDB (if not already running)

# Test MongoDB connection
python test_mongo.py

# Start Flask server
python api.py
```

### 💻 Frontend Setup
```bash
# Navigate into the frontend folder
cd dss-frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

📍 React runs on [http://localhost:3000](http://localhost:3000) and communicates with the Flask backend on [http://localhost:5000](http://localhost:5000).

---

## 🔗 API Endpoints

### 📝 Register User – `POST /register`
```json
{
  "username": "yourname",
  "password": "yourpassword"
}
```

### 🔐 Login User – `POST /login`
```json
{
  "username": "yourname",
  "password": "yourpassword"
}
```
Returns a JWT token for authenticated requests.

### ✍️ Generate Signature – `POST /generate_signature`
```json
{
  "message": "Hello, DSS!"
}
```
JWT token must be sent in `Authorization` header.

### 🔍 Verify Signature – `POST /verify_signature`
```json
{
  "message": "Hello, DSS!",
  "signature": "<signature_string>"
}
```

### 📬 Get Stored Signatures – `GET /get_signature`
Returns all stored digital signatures for the logged-in user.

---

## 🌐 Frontend Functionality
- Login & registration forms
- Message input and signature generation
- Display of stored signatures
- Signature verification interface

> All frontend calls use secure token-based requests to the Flask backend.

---

## 🔒 Security Highlights
- ✅ Password hashing with PBKDF2
- ✅ JWT authentication for protected routes
- ✅ Signature expiration logic (if added)
- ✅ RSA 2048-bit key generation
- ✅ SHA-256 hashing with PSS padding

---

## 📌 Future Enhancements
- 📤 Export/Download generated signatures
- 📄 Signature revocation system
- 📊 Admin dashboard for monitoring
- 🌍 Deployment on cloud (Render, Heroku, etc.)
- 📱 Mobile-friendly frontend

---

## 🤝 Contributing
Pull requests and suggestions are welcome! For major changes, open an issue first.

---

## 📚 Educational Note
This full-stack project is meant for learning purposes to demonstrate how cryptographic principles can be integrated into web applications securely.

---

🚀 Happy Hacking!

