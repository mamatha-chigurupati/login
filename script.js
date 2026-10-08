```javascript
const loginForm = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const togglePassword = document.getElementById("togglePassword");


// Show / Hide Password
togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";
        togglePassword.textContent = "Show";

    }

});


// Login Validation
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;


    // Email validation
    if (email.value.trim() === "") {

        emailError.textContent = "Email is required";
        isValid = false;

    } else if (!email.value.includes("@")) {

        emailError.textContent = "Enter a valid email address";
        isValid = false;

    }


    // Password validation
    if (password.value.trim() === "") {

        passwordError.textContent = "Password is required";
        isValid = false;

    } else if (password.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        isValid = false;
    }


    // Successful validation
    if (isValid) {

        successMessage.textContent =
            "Login successful!";

        console.log("Email:", email.value);
        console.log("Password:", password.value);

    }

});


// Forgot password
document.getElementById("forgotPassword")
    .addEventListener("click", function (event) {

        event.preventDefault();

        alert("Password reset link will be sent to your email.");

    });
```
