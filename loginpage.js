var form = document.getElementById("Registerform");

function submitForm(event) {
    event.preventDefault();

    // Get form values
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;("")
    var name = document.getElementById

    // Clear previous error messages
    document.getElementById("emailError").innerHTML = '';
    document.getElementById("numberError").innerHTML = '';
    document.getElementById("passwordError").innerHTML = '';
    document.getElementById("nameError").innerHTML = '';

    // Validation flags
    var isValid = true;

    // Validate name
    if (name.trim() === '') {
        document.getElementById("nameError").innerHTML = 'Name should not be empty';
        isValid = false;
    }

    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
        document.getElementById("emailError").innerHTML = '@ and . are compulsory';
        isValid = false;
    }

    // Validate number (length and numeric check)
    if (number.length != 10 || isNaN(number)) {
        document.getElementById("numberError").innerHTML = 'Number should be 10 digits long and only contain numbers';
        isValid = false;
    }

    // Validate password length
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = 'Password should be at least 8 characters long';
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Welcome to the website');
    }
}

// Attach event listener to the form
form.addEventListener('submit', submitForm);
