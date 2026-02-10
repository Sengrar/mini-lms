document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.email === email);

    if(userExists){
        alert("User already exists");
        return;
    }

    const newUser = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Signup Success");

    window.location.href = "/dashboard.html";
});
