// Handle form submission for login simulation
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting the usual way
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple "authentication" for UI purposes (check if both fields are filled)
    if (username && password) {
      // Redirect to homepage after successful "login"
      window.location.href = 'home.html';  // Change 'home.html' to your actual homepage URL
    } else {
      alert('Please fill in both fields');
    }
  });
  