document.addEventListener('DOMContentLoaded', () => {
    const nextButtonNamemail = document.querySelector('.namemail .nextt');
    const backButtonPasss = document.querySelector('.passs .back');
    const namemailDiv = document.querySelector('.namemail');
    const passsDiv = document.querySelector('.passs');
    const nameInput = document.querySelector('.namemail input[type="text"]');
    const emailInput = document.querySelector('.namemail input[type="email"]');
    const passwordInput = document.querySelector('.passs input[type="password"]:nth-of-type(1)');
    const confirmPasswordInput = document.querySelector('.passs input[type="password"]:nth-of-type(2)');
    const nextButtonPasss = document.querySelector('.passs .next');
    const customAlert = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    // const alertClose = document.getElementById('alertClose');
    let alertTimeout; 

    function showAlert(message) {
        alertMessage.textContent = message;
        customAlert.classList.remove('hidden');
        clearTimeout(alertTimeout); 
        alertTimeout = setTimeout(() => {
            hideAlert();
        }, 2000);
    }

    function hideAlert() {
        customAlert.classList.add('hidden');
    }

    // Close the alert box manually
    // alertClose.addEventListener('click', () => {
    //     hideAlert();
    //     clearTimeout(alertTimeout); 
    // });

    passsDiv.classList.add('display-none');

    nextButtonNamemail.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name && emailRegex.test(email)) {
            namemailDiv.classList.add('display-none');
            passsDiv.classList.remove('display-none');
        } else {
            showAlert('Please enter a valid name and email address.');
        }
    });

    backButtonPasss.addEventListener('click', () => {
        passsDiv.classList.add('display-none');
        namemailDiv.classList.remove('display-none');
    });

    nextButtonPasss.addEventListener('click', () => {
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (password && confirmPassword && password === confirmPassword) {
            showAlert('Registration Successful!');
        } else {
            showAlert('Passwords do not match or are empty. Please try again.');
        }
    });
});
