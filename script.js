document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing

  // Get field values
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let country = document.getElementById("country").value;
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Error fields
  let usernameError = document.getElementById("usernameError");
  let emailError = document.getElementById("emailError");
  let mobileError = document.getElementById("mobileError");
  let countryError = document.getElementById("countryError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  // Reset errors
  usernameError.textContent = "";
  emailError.textContent = "";
  mobileError.textContent = "";
  countryError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";

  let isValid = true;

  // ✅ Username validation
  let usernamePattern = /^[a-zA-Z0-9]+$/; // only letters & numbers
  if (username === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters";
    isValid = false;
  } else if (!username.match(usernamePattern)) {
    usernameError.textContent = "Username can only contain letters and numbers";
    isValid = false;
  }

  // ✅ Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // ✅ Mobile number validation (10 digits only)
  let mobilePattern = /^[0-9]{10}$/;
  if (mobile === "") {
    mobileError.textContent = "Mobile number is required";
    isValid = false;
  } else if (!mobile.match(mobilePattern)) {
    mobileError.textContent = "Enter a valid 10-digit mobile number";
    isValid = false;
  }

  // ✅ Country validation
  if (country === "") {
    countryError.textContent = "Please select your country";
    isValid = false;
  }

  // ✅ Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // ✅ Confirm password validation
  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match";
    isValid = false;
  }

  // ✅ If all fields are valid
  if (isValid) {
    alert("Registration Successful!\nWelcome " + username + " from " + country);
    document.getElementById("registrationForm").reset();
  }
});