# Sample data for calls and SMS
# Each entry represents a transaction with details such as call duration, SMS count, location, etc.
data = [
    {"call_duration": 300, "sms_count": 5, "location": "International"},
    {"call_duration": 30, "sms_count": 15, "location": "Local"},
    {"call_duration": 0, "sms_count": 50, "location": "Local"},
    {"call_duration": 10, "sms_count": 100, "location": "Unknown"},
]

# Define fraud detection rules
def is_fraud(entry):
    # Rule 1: Unusually high number of SMS may indicate spam or fraud
    if entry["sms_count"] > 40:
        return True
    # Rule 2: Long call duration to international locations may be flagged
    if entry["location"] == "International" and entry["call_duration"] > 180:
        return True
    # Rule 3: Multiple conditions for higher risk
    if entry["location"] == "Unknown" and entry["sms_count"] > 30:
        return True
    # Add more rules as needed
    return False

# Check each transaction for potential fraud
for i, entry in enumerate(data):
    if is_fraud(entry):
        print(f"Transaction {i+1}: Potential fraud detected.")
    else:
        print(f"Transaction {i+1}: No fraud detected.")