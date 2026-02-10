function initProfilePage(){

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if(!currentUser){
        window.location.href = "/login.html";
        return;
    }

    // Fill Inputs
    document.getElementById("firstName").value = currentUser.firstName || "";
    document.getElementById("lastName").value = currentUser.lastName || "";
    document.getElementById("email").value = currentUser.email || "";


    // UPDATE PROFILE
    document.getElementById("profileForm").addEventListener("submit", function(e){
        e.preventDefault();

        let users = JSON.parse(localStorage.getItem("users")) || [];

        currentUser.firstName = document.getElementById("firstName").value;
        currentUser.lastName = document.getElementById("lastName").value;
        currentUser.email = document.getElementById("email").value;

        const newPass = document.getElementById("password").value;
        if(newPass){
            currentUser.password = newPass;
        }

        users = users.map(u => u.id === currentUser.id ? currentUser : u);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        alert("Profile Updated");
    });


    // LOGOUT
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        window.location.href = "/login.html";
    });

}
