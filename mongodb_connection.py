from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")

# Access the database
db = client["DSS_MK"]

# Access the collection
signatures_collection = db["digital_signatures"]

print("Connected to MongoDB successfully!")
