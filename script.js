function toggle(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

/* ---------- SIGNUP ---------- */
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = nameField();
    const email = emailField();
    const phone = phoneField();
    const city = cityField();
    const pass = passwordField();
    const confirm = confirmField(pass);

    if (name && email && phone && city && pass && confirm) {
      localStorage.setItem("user", JSON.stringify({
        name,
        email,
        phone,
        city,
        pass
      }));
      alert("Signup Successful!");
      window.location.href = "index.html";
    }
  });
}

function nameField() {
  const v = name.value.trim();
  if (!/^[A-Za-z ]+$/.test(v)) {
    nameError.textContent = "Only alphabets allowed";
    return false;
  }
  nameError.textContent = "";
  return v;
}

function emailField() {
  if (!/^\S+@\S+\.\S+$/.test(email.value)) {
    emailError.textContent = "Invalid email format";
    return false;
  }
  emailError.textContent = "";
  return email.value;
}

function phoneField() {
  if (!/^\d{10}$/.test(phone.value)) {
    phoneError.textContent = "Enter 10 digit number";
    return false;
  }
  phoneError.textContent = "";
  return phone.value;
}

function cityField() {
  if (!/^[A-Za-z ]+$/.test(city.value)) {
    cityError.textContent = "Only alphabets allowed";
    return false;
  }
  cityError.textContent = "";
  return city.value;
}

function passwordField() {
  if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password.value)) {
    passwordError.textContent = "Min 8 chars with letters & numbers";
    return false;
  }
  passwordError.textContent = "";
  return password.value;
}

function confirmField(pass) {
  if (confirmPassword.value !== pass) {
    confirmError.textContent = "Passwords do not match";
    return false;
  }
  confirmError.textContent = "";
  return true;
}

/* ---------- SIGNIN ---------- */
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const saved = JSON.parse(localStorage.getItem("user"));

    if (
      saved &&
      loginEmail.value === saved.email &&
      loginPassword.value === saved.pass
    ) {
      alert("Login Successful!");
      // Redirect to Tourist Landing Page
      // window.location.href = "tourist.html";
    } else {
      alert("Invalid login credentials");
    }
  });
}
