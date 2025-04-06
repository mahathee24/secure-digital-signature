from cryptography.hazmat.primitives.asymmetric import padding
from cryptography.hazmat.primitives import hashes, serialization
from pymongo import MongoClient
import base64
from datetime import datetime, timezone

client = MongoClient("mongodb://localhost:27017/")
db = client["DSS_MK"]
signatures_collection = db["digital_signatures"]

def verify_signature(username, message, signature):
    """Verify the signature for a given message and check expiration."""

    user_doc = signatures_collection.find_one({"username": username})

    if not user_doc:
        return {"error": f"❌ No user found with username: {username}"}
    if "signatures" not in user_doc:
        return {"error": "❌ No signatures found for this user."}

    for sig in user_doc["signatures"]:
        
        if sig["message"].strip() == message.strip() and sig["signature"] == signature:
            try:
                stored_signature = base64.b64decode(sig["signature"])
                public_key_pem = sig["public_key"].encode()
                expires_at = datetime.fromisoformat(sig["expires_at"]).replace(tzinfo=timezone.utc)
                break
            except Exception as e:
                return {"error": f"❌ Error processing signature data: {str(e)}"}
    else:
        return {"error": "❌ No matching signature found for the given message and signature."}

    if datetime.utcnow().replace(tzinfo=timezone.utc) > expires_at:
        return {"error": "⏳ Signature has expired and cannot be verified."}

    try:
        public_key = serialization.load_pem_public_key(public_key_pem)
        public_key.verify(
            stored_signature,
            message.strip().encode(),
            padding.PSS(
                mgf=padding.MGF1(hashes.SHA256()),
                salt_length=padding.PSS.MAX_LENGTH
            ),
            hashes.SHA256()
        )
        return {"message": "✅ Signature is valid!"}
    except Exception as e:
        return {"error": f"❌ Signature verification failed: {str(e)}"}
