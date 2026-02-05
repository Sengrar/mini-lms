const form = document.getElementById("authForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const switchAuth = document.getElementById("switchAuth");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const nameFields = document.getElementById("nameFields");

let isLogin = true;

/* ---------- SESSION CHECK ON PAGE LOAD ---------- */
if (localStorage.getItem("loggedIn") === "true") {
  console.log("User already logged in");
}

/* ---------- SHOW / HIDE PASSWORD ---------- */
togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isLogin) {
    if (firstName.value === "" || lastName.value === "") {
      alert("Please enter first and last name");
      return;
    }
  }

  if (email.value === "" || password.value === "") {
    alert("Please fill all fields");
    return;
  }

  if (!validateEmail(email.value)) {
    alert("Invalid email");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  isLogin ? loginUser() : registerUser();
});

/* ---------- EMAIL VALIDATION ---------- */
function validateEmail(mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

/* ---------- REGISTER ---------- */
function registerUser() {
  const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };

  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("loggedIn", "true");

  alert("Signup successful!");
}

/* ---------- LOGIN ---------- */
function loginUser() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No account found. Please sign up.");
    return;
  }

  if (
    email.value === storedUser.email &&
    password.value === storedUser.password
  ) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
  } else {
    alert("Invalid credentials");
  }
}

/* ---------- SWITCH LOGIN / SIGNUP ---------- */
switchAuth.addEventListener("click", () => {
  isLogin = !isLogin;

  document.querySelector(".subtitle").innerText = isLogin
    ? "Login to your account"
    : "Create a new account";

  switchAuth.innerText = isLogin ? "Sign up" : "Login";

  nameFields.style.display = isLogin ? "none" : "block";
});
