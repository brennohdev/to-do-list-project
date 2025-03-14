const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register');

const handleLogin = async () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        alert(data.message);

        if (response.ok) {
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error('Login error:', error.message || error);
        alert('It was not possible to login. Try again.');
    }
};

const redirectToRegister = () => {
    window.location.href = 'signup.html';
};

// Event listeners
loginButton.addEventListener('click', handleLogin);
registerButton.addEventListener('click', redirectToRegister);
