document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registrationForm');

    const requirements = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };

    const patterns = {
        length: /.{8,}/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        special: /[@$!%*?&]/
    };

    const validatePassword = () => {
        const password = passwordInput.value;
        let allMet = true;

        for (const key in patterns) {
            const isMet = patterns[key].test(password);
            if (isMet) {
                requirements[key].classList.add('met');
            } else {
                requirements[key].classList.remove('met');
                allMet = false;
            }
        }

        submitBtn.disabled = !allMet;
    };

    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        alert(`Welcome, ${username}! Registration successful.`);
        form.reset();
        validatePassword();
    });
});
