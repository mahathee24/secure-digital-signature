from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["DSS_MK"]
collection = db["digital_signatures"]
