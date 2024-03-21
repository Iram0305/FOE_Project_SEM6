function validate()
{
        
        function validateFullName() {
            const fullNameInput = document.getElementById('fullName');
            const fullNameValue = fullNameInput.value;

            if (/^[A-Za-z\s]+$/.test(fullNameValue)) {
                return true;
            } else {
                alert('Full Name should contain only letters and spaces.');
                return false;
            }
        }

        
        function validatePhoneNumber() {
            const phoneNumberInput = document.getElementById('number');
            const phoneNumberValue = phoneNumberInput.value;

            if (/^\d{10}$/.test(phoneNumberValue)) {
                return true;
            } else {
                alert('Phone number should be 10 digits long and contain only numbers.');
                return false;
            }
        }

        
        function validateUserID() {
            const userIDInput = document.getElementById('usid');
            const userIDValue = userIDInput.value;

            if (/^\d+$/.test(userIDValue)) {
                return true;
            } else {
                alert('User ID should contain only numbers.');
                return false;
                
            }
        }

        
        function validateEmail() {
            const emailInput = document.getElementById('mail');
            const emailValue = emailInput.value;

            if (/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(emailValue)) {
                return true;
            } else {
                alert('Please enter a valid Email ID.');
                return false;
            }
        }

        
        function validatePassword() {
            const passwordInput = document.getElementById('password');
            const passwordValue = passwordInput.value;

            
            if (/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(passwordValue)) {
                return true;
            } else {
                alert('Password should be at least 8 characters long and alphanumeric.');
                return false;
            }
        }      

        
        function validateDateOfBirth() {
            const dobInput = document.getElementById('dob');
            const dobValue = dobInput.value;

            if (!/^\d{4}-\d{2}-\d{2}$/.test(dobValue)) {
            alert('Date of Birth should be in the format YYYY-MM-DD.');
            return false;
            }

            // Calculate the user's age
            const birthDate = new Date(dobValue);
            const currentDate = new Date();
            const age = currentDate.getFullYear() - birthDate.getFullYear();

            // Check if the user is above 18 years old
            if (age < 18) {
                alert('You must be at least 18 years old to register.');
                return false;
            }

    return true;
        }

        
        function submitForm() {
            if (
                validateFullName() &&
                validatePhoneNumber() &&
                validateUserID() &&
                validateEmail() &&
                validatePassword() &&                
                validateDateOfBirth()
            ) {
                alert('Form submitted successfully!');
            } else {
                alert('Form validation failed. Please check the fields.');
            }
        }

        
        const submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', submitForm);
    }