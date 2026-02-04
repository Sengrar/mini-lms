// =======Footer Logic========

document.addEventListener("DOMContentLoaded", () => {
  fetch("/components/footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error("Footer load failed:", err));
});

// =======Stats Count Animation========

const counters = document.querySelectorAll('.count');
let hasAnimated = false;

const startCount = () => {
  if (hasAnimated) return;
  hasAnimated = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const speed = 200; // smaller = faster

    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = formatNumber(target);
      }
    };

    updateCount();
  });
};

const formatNumber = num => {
  if (num >= 1000000) return (num / 1000000) + "M+";
  if (num >= 1000) return (num / 1000) + "K+";
  return num + "+";
};

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    startCount();
  }
}, { threshold: 0.4 });

observer.observe(document.querySelector('.impact-stats'));

