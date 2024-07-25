document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', registerUser);
    }

    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', loginUser);
    }

    if (document.getElementById('user')) {
        const username = localStorage.getItem('currentUser');
        if (username) {
            document.getElementById('user').textContent = username;
        } else {
            window.location.href = 'login.html';
        }
    }
});

const users = JSON.parse(localStorage.getItem('users')) || {};

function hashPassword(password) {
    return btoa(password); 
}

function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const hashedPassword = hashPassword(password);

    if (users[username]) {
        alert('User already exists.');
    } else {
        users[username] = hashedPassword;
        localStorage.setItem('users', JSON.stringify(users));
        alert('User registered successfully!');
        window.location.href = 'login.html';
    }
}

function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const hashedPassword = hashPassword(password);

    if (users[username] && users[username] === hashedPassword) {
        alert('Login successful!');
        localStorage.setItem('currentUser', username);
        window.location.href = 'secured.html';
    } else {
        alert('Wrong password/username. Try again!');
    }
}
