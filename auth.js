document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Logic for sign-in (replace this with actual authentication logic)
    if (email === 'test@gmail.com' && password === 'password') {
        alert('Login successful');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('new-email').value;
    const password = document.getElementById('new-password').value;
    
    // Logic for sign-up (you can store in localStorage or use a backend)
    if (email && password) {
        alert('Account created successfully');
        window.location.href = 'login.html';
    } else {
        alert('Please fill out the form');
    }
});
