document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error("Navbar load failed:", err));
});

// ======Theme button=========

// const themeButton = document.querySelector('.theme-btn');
// const homesection = document.querySelector('.home-section');
// const inText = '☀';
// let inText = 1;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.body.classList.add("light");

document.addEventListener("click", (e)=>{
  // console.log("button  clicked");
  if(e.target.classList.contains("theme-btn")){
    // e.target.textContent = '☀';
    // inText = true;

    document.body.classList.toggle("light");
    e.target.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";

    localStorage.setItem(
        "theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );


    // if(e.target.textContent === '🌙'){
    //   document.body.classList.toggle("light");
    //   e.target.textContent = '☀️';
    // }
    // else{
    //   // homesection.style.color  = 'white';
    //   document.body.classList.toggle("dark");
    //   e.target.textContent = '🌙';
    // }
    
    // homesection.style.backgroung = url("/assets/images/hero-bg.jpg")

  }
  
})

// ======Hamburger Menu=======

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("hamburger")) {
    document.querySelector(".nav-links").classList.toggle("active");
    document.querySelector(".nav-right").classList.toggle("active");
  }
});
