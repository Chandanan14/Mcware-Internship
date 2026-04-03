 const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            // Show password
            password.type = "text";

            // Show eye-slash icon
            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        } else {

            // Hide password
            password.type = "password";

            // Show eye icon
            
            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });


    // Grab elements
const email = document.getElementById("email");
const loginBtn = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");


// Email validation function
function validateEmail(emailValue) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
}

// Password validation function (numbers only, min 8 digits)
function validatePassword(passwordValue) {
    const passwordRegex = /^\d{8,}$/;
    return passwordRegex.test(passwordValue);
}

// Login button click
loginBtn.addEventListener("click", function () {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Clear previous error
    errorMessage.textContent = "";

    // Check if email is empty
    if (emailValue === "") {
        errorMessage.textContent = "Email cannot be empty!";
        return;
    }

    // Validate email format
    if (!validateEmail(emailValue)) {
        errorMessage.textContent = "Please enter a valid email!";
        return;
    }

    // Check if password is empty
    if (passwordValue === "") {
        errorMessage.textContent = "Password cannot be empty!";
        return;
    }

    // Validate password
    if (!validatePassword(passwordValue)) {
        errorMessage.textContent = "Password must be at least 8 digits and numbers only!";
        return;
    }

    // All valid → redirect to new page
    window.location.href = "dashboard.html"; 
});

// Optional: clear error when typing
email.addEventListener("input", () => { errorMessage.textContent = ""; });
password.addEventListener("input", () => { errorMessage.textContent = ""; });


