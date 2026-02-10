function initProfilePage() {

    const userData = localStorage.getItem("currentUser");

    if (!userData) {
        alert("Please login first");
        window.location.href = "login.html";
        return;
    }

    const user = JSON.parse(userData);

    // Fill Inputs
    document.getElementById("firstName").value = user.firstName || "";
    document.getElementById("lastName").value = user.lastName || "";
    document.getElementById("email").value = user.email || "";

    // Update Profile
    document.getElementById("profileForm").addEventListener("submit", function (e) {
        e.preventDefault();

        user.firstName = document.getElementById("firstName").value;
        user.lastName = document.getElementById("lastName").value;
        user.email = document.getElementById("email").value;

        const newPass = document.getElementById("password").value;
        if (newPass.trim() !== "") {
            user.password = newPass;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert("Profile Updated Successfully");
    });

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", function () {
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
}

