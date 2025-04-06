from pymongo import MongoClient

try:
    client = MongoClient("mongodb://localhost:27017/")
    db = client["DSS_MK"]

    # Check connection by running a command
    db.command("ping")

    print("✅ Connected to MongoDB successfully!")

except Exception as e:
    print(f"❌ MongoDB connection failed: {e}")
