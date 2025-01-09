document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirmPassword');
    const showPasswordToggle = document.querySelector('#showPasswordToggle');

    showPasswordToggle.addEventListener('change', () => {
        const type = showPasswordToggle.checked ? 'text' : 'password';
        passwordInput.type = type;
        confirmPasswordInput.type = type;
    });
});