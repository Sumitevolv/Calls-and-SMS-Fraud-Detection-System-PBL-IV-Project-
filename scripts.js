function predictFraud() {
    // Get input values
    const callDuration = parseFloat(document.getElementById('call_duration').value);
    const smsLength = parseInt(document.getElementById('sms_length').value);
    const numberOfCalls = parseInt(document.getElementById('number_of_calls').value);
    const numberOfSms = parseInt(document.getElementById('number_of_sms').value);

    // Basic fraud detection logic
    let fraudScore = 0;

    // Increase score based on certain thresholds
    if (callDuration > 15) fraudScore += 2; // High call duration
    if (smsLength > 50) fraudScore += 1; // Long SMS
    if (numberOfCalls >3) fraudScore += 3; // Excessive calls
    if (numberOfSms > 3) fraudScore += 3; // Excessive SMS

    // Set a threshold for fraud prediction
    const fraudThreshold = 5;

    // Display result
    const resultDiv = document.getElementById('result');
    if (fraudScore >= fraudThreshold) {
        resultDiv.innerHTML = `<p style="color: red;">Potential Fraud Detected! Fraud Score: ${fraudScore}</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: green;">No Fraud Detected. Fraud Score: ${fraudScore}</p>`;
    }
}
