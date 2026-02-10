// Toggle sidebar
const toggleBtn = document.querySelector('.hamburger');
const sidebar = document.getElementById("sidebar");
const closeBtn = document.querySelector('.closeBtn');

// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("active");
// //   toggleBtn.style.display = "none"
// });

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("hamburger")){
        sidebar.classList.toggle("active");
    }
  
//   toggleBtn.style.display = "none"
});

// Highlight active link
const links1 = document.querySelectorAll(".sidebar ul li a");
links1.forEach(link1 => {
  link1.addEventListener("click", () => {
    links1.forEach(l => l.classList.remove("active"));
    link1.classList.add("active");
  });
});



closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("active");
//   toggleBtn.style.display = "block";
})


// ======Loader===============================================

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // loader.style.display = "none";   // hide loader
  content.style.display = "block"; // show page content
});

// ===========================================================