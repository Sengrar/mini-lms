document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(u => u.email === email && u.password === password);

    if(!user){
        alert("Invalid Credentials");
        return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login Success");

    window.location.href = "/dashboard.html";
});
