function validate() {
    var username = document.getElementById("name").value;
    var regex = /^[a-zA-Z0-9]+$/;

    if (!regex.test(username)) {
        alert("PLEASE DO NOT USE SPECIAL CHARACTERS");
        return false;
    }
    return true;
}
function validate() {
    var username = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var regexUsername = /^[a-zA-Z0-9]+$/;
    var regexPhone = /^[0-9]{10}$/; 

    if (!regexUsername.test(username)) {
        alert("PLEASE DO NOT USE SPECIAL CHARACTERS IN THE USERNAME");
        return false;
    }

    if (!regexPhone.test(phone)) {
        alert("PHONE NUMBER SHOULD HAVE 10 DIGITS");
        return false;
    }

    return true;
}

function validate() {
    var email = document.getElementById("email").value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
        alert("INVALID EMAIL ADDRESS");
        return false;
    }

    return true;
}


function validate() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("passcon").value;
    var regexPassword = /^.{8,}$/;

    if (!regexPassword.test(password)) {
        alert("PASSWORD MUST BE ATLEAST 8 CHARACTERS LONG");
        return false;
    }

    if (password !== confirmPassword) {
        alert("NO MATCH. PLEASE ENTER SAME PASSWORDS IN BOTH INPUT FIELDS");
        return false;
    }

    return true;
}
function validate() {
    var dob = document.getElementById("dob").value;
    var regexDOB = /^\d{4}-\d{2}-\d{2}$/;

    if (!regexDOB.test(dob)) {
        alert("PLEASE ENTER DATE OF BIRTH IN DD-MM-YYYY FORMAT");
        return false;
    }

    return true;
}

