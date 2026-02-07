document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.style.display = "block";
    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  });
});