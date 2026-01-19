// SHOW / HIDE PASSWORD
function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// SIGNUP
const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;

    const name = nameInput();
    const email = emailInput();
    const password = passwordInput();
    const confirm = confirmInput(password);

    if (valid) {
      localStorage.setItem("user", JSON.stringify({ name, email, password }));
      alert("Signup successful!");
      window.location.href = "index.html";
    }

    function nameInput() {
      const val = document.getElementById("name").value;
      document.getElementById("nameError").innerText = val ? "" : "Name required";
      if (!val) valid = false;
      return val;
    }

    function emailInput() {
      const val = document.getElementById("email").value;
      document.getElementById("emailError").innerText =
        /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(val) ? "" : "Invalid email";
      if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(val)) valid = false;
      return val;
    }

    function passwordInput() {
      const val = document.getElementById("password").value;
      document.getElementById("passwordError").innerText =
        val.length >= 8 ? "" : "Min 8 characters";
      if (val.length < 8) valid = false;
      return val;
    }

    function confirmInput(pass) {
      const val = document.getElementById("confirm").value;
      document.getElementById("confirmError").innerText =
        val === pass ? "" : "Passwords do not match";
      if (val !== pass) valid = false;
      return val;
    }
  });
}

// SIGNIN
const signinForm = document.getElementById("signinForm");

if (signinForm) {
  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("No account found. Please sign up.");
      return;
    }

    if (email === user.email && password === user.password) {
      window.location.href = "landing.html";
    } else {
      alert("Invalid login details");
    }
  });
}

// LOGOUT
function logout() {
  window.location.href = "index.html";
}
