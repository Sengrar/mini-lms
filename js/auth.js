const form = document.getElementById("authForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const switchAuth = document.getElementById("switchAuth");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const nameFields = document.getElementById("nameFields");

let isLogin = true;

/* ---------- SESSION CHECK ---------- */
if (localStorage.getItem("currentUser")) {
  window.location.href = "/dashboard.html";
}

/* ---------- SHOW / HIDE PASSWORD ---------- */
togglePassword.addEventListener("click", () => {
  password.type = password.type === "password" ? "text" : "password";
});

/* ---------- FORM SUBMIT ---------- */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!isLogin) {
    if (!firstName.value || !lastName.value) {
      alert("Enter full name");
      return;
    }
  }

  if (!email.value || !password.value) {
    alert("Fill all fields");
    return;
  }

  if (!validateEmail(email.value)) {
    alert("Invalid email");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be 6+ characters");
    return;
  }

  isLogin ? loginUser() : registerUser();
});

/* ---------- EMAIL VALIDATION ---------- */
function validateEmail(mail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

/* ---------- REGISTER (MULTI USER) ---------- */
function registerUser() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email.value)) {
    alert("Account already exists");
    return;
  }

  const newUser = {
    id: Date.now(),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  alert("Signup successful!");

  window.location.href = "/dashboard.html";
}

/* ---------- LOGIN ---------- */
function loginUser() {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    u => u.email === email.value && u.password === password.value
  );

  if (!user) {
    alert("Invalid credentials");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));

  alert("Login successful!");

  window.location.href = "/dashboard.html";
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
