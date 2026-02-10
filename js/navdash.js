document.addEventListener("DOMContentLoaded", () => {
  
  // ---------- Load Navbar ----------
  fetch("/components/navdash.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Navbar load failed:", err));


  // ---------- Load Default Dashboard Page ----------
  loadPage("/pages/dash-home.html");


  // ---------- Handle Menu Click Navigation ----------
  document.addEventListener("click", async (e) => {

    const link = e.target.closest(".menu-links");
    if (!link) return;

    e.preventDefault();

    const url = link.getAttribute("href");

    loadPage(url);

    // Active menu highlight
    document.querySelectorAll(".menu-links")
      .forEach(l => l.parentNode.classList.remove("active"));

    link.parentNode.classList.add("active");
  });

});


// ---------- Common Page Loader Function ----------
async function loadPage(url) {
  try {
    const res = await fetch(url);
    const html = await res.text();

    document.querySelector("#hero-content").innerHTML = html;

    // ✅ IMPORTANT: Run profile JS ONLY after HTML is loaded
    if (url.includes("profile.html")) {
      if (typeof initProfilePage === "function") {
        initProfilePage();
      }
    }

  } catch (err) {
    console.error("Page load error:", err);
  }
}
