document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('registrationForm');

    // Requirement elements
    const requirements = {
        length: document.getElementById('length'),
        uppercase: document.getElementById('uppercase'),
        lowercase: document.getElementById('lowercase'),
        number: document.getElementById('number'),
        special: document.getElementById('special')
    };

    // Regex patterns for validation
    const patterns = {
        length: /.{8,}/,
        uppercase: /[A-Z]/,
        lowercase: /[a-z]/,
        number: /[0-9]/,
        special: /[@$!%*?&]/
    };

    // Function to check password strength
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

        // Enable/Disable submit button based on all requirements being met
        submitBtn.disabled = !allMet;
    };

    // Listen for input on the password field
    passwordInput.addEventListener('input', validatePassword);

    // Form submission (just an alert for this demo)
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        alert(`Welcome, ${username}! Registration successful.`);
        form.reset();
        validatePassword(); // Reset validation indicators
    });
});
