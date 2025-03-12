const password = document.getElementById('password');
const email = document.getElementById('email');


document.getElementById('login-button').addEventListener('click', async () => {
    
    try {
        const response = await fetch ('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            localStorage.setItem('token', data.token);
            window.location.href = 'index.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Login try error:', error);
        alert('It was not possible to login. Try again.');
    }
});


document.getElementById('register').addEventListener('click', () => {
    window.location.href = 'signup.html';
});