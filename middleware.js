function isWorkingHours(req, res, next) {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours();

    // Check if it's a weekday (Monday to Friday) and the time is between 9 and 17 (5 PM)
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 20) {
        // If it's within working hours, call the next middleware
        next();
    } else {
        // If it's outside working hours, send a 503 response
        res.status(503).send("Server not available during non-working hours");
    }
}

module.exports = isWorkingHours;
