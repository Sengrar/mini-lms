document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/navdash.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Navbar load failed:", err));
});


document.addEventListener("DOMContentLoaded", () => {
  fetch("/pages/dash-home.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("hero-content").innerHTML = data;

      if (page.includes("profile.html")) {
                initProfilePage();
            }
    })
    .catch(err => console.error("Navbar load failed:", err));
});


document.addEventListener("click", async (e) => {

    const link = e.target.closest(".menu-links");
    if (!link) return;

    e.preventDefault();

    const url = link.href;

    try {
        const res = await fetch(url);
        const data = await res.text();

        document.querySelector("#hero-content").innerHTML = data;

        document.querySelectorAll(".menu-links")
            .forEach(l => l.parentNode.classList.remove("active"));

        link.parentNode.classList.add("active");

        // history.pushState(null, "", url);

    } catch (err) {
        console.log(err);
    }
});


// Highlight active link
// const links = document.querySelectorAll(".navbar ul li");
// links.forEach(link => {
//   link.addEventListener("click", () => {
//     links.forEach(l => l.classList.remove("active"));
//     link.classList.add("active");
//   });
// });

// Click highlight
// document.addEventListener("click", (e) => {
//     const link = e.target.closest(".menu-links");
//     if (!link) return;

//     document.querySelectorAll(".menu-links")
//         .forEach(l => l.parentNode.classList.remove("active"));

//     link.parentNode.classList.add("active");
// });


