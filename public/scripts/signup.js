const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signupButton = document.getElementById('sign-up_button');
const loginLink = document.getElementById('login-link');

const signUp = async () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password || !name) {
        alert('Please fill in all fields.');
        return;
    }

    try {
        const response = await fetch ('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = 'login.html';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error ('Sign up error', error);
        alert('It was not possible to sign up. Try again.');
    }

};

signupButton.addEventListener('click', signUp);
loginLink.addEventListener('click', () => {
    window.location.href = 'login.html'
});