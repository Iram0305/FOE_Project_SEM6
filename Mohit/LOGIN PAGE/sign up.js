function validate() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;

    
    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return false;
    }

    
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(username)) {
        alert("Username must contain only letters and numbers.");
        return false;
    }

   
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    
    return true;
}
