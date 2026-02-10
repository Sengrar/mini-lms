// const user = JSON.parse(localStorage.getItem("currentUser"));

// if (!user) {
//   window.location.href = "/login.html";
// }


const btn = document.getElementById("themeToggle");
const btn1 = document.getElementById("themeToggle1");

btn.onclick = () => {
    document.body.classList.toggle("light-theme");
};

btn1.onclick = () => {
    document.body.classList.toggle("light-theme");
};


// ======================================================

// document.addEventListener("click", (e) => {

//   /* ---------- LOGOUT ---------- */
//   if (e.target.id === "logoutBtn") {
//     localStorage.removeItem("currentUser");
//     window.location.replace("/login.html");
//   }

// });


// /* ---------- LOAD PROFILE DATA AFTER FETCH ---------- */
// function loadProfileDataIfExists() {

//   const firstNameInput = document.getElementById("firstName");
//   if (!firstNameInput) return; // Means profile page not loaded

//   const user = JSON.parse(localStorage.getItem("currentUser"));
//   if (!user) return;

//   document.getElementById("firstName").value = user.firstName || "";
//   document.getElementById("lastName").value = user.lastName || "";
//   document.getElementById("email").value = user.email || "";
// }

// // =======

// document.addEventListener("submit", (e) => {

//   if (e.target.id === "profileForm") {

//     e.preventDefault();

//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     const userIndex = users.findIndex(u => u.id === currentUser.id);
//     if (userIndex === -1) return;

//     const firstName = document.getElementById("firstName").value;
//     const lastName = document.getElementById("lastName").value;
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     users[userIndex].firstName = firstName;
//     users[userIndex].lastName = lastName;
//     users[userIndex].email = email;

//     if (password && password.length >= 6) {
//       users[userIndex].password = password;
//     }

//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

//     alert("Profile Updated Successfully");
//   }

// });


