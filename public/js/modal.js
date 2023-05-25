// Get the login button element
const loginButton = document.getElementById('login-button');

// Add click event listener to login button
loginButton.addEventListener('click', () => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.classList.add('show');
});

// Add event listener for signup link
document.addEventListener('click', (event) => {
    if (event.target.matches('#signup-link')) {
        const modalContainer = document.getElementById('modal-container');
        modalContainer.classList.add('show');
    }
});