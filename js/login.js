// Admin credentials (hardcoded for now)
const adminUsername = "admin";
const adminPassword = "admin123";

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Check if the credentials match
    if (username === adminUsername && password === adminPassword) {
        // Redirect to the dashboard (this is just a placeholder)
        window.location.href = "dashboard.html"; // Replace with your actual dashboard page
    } else {
        // Show error message if credentials are incorrect
        errorMessage.textContent = "Invalid username or password!";
    }
});
