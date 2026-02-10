const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const videos = {
  html: "https://www.youtube.com/embed/HcOc7P5BMi4",
  css: "https://www.youtube.com/embed/ESnrn1kAD4E",
  js: "https://www.youtube.com/embed/VlPiVmYuoqw",
  python: "https://www.youtube.com/embed/rfscVS0vtbw",
  react: "https://www.youtube.com/embed/bMknfKXIFA8"
};

// iframe + title
const iframe = document.getElementById("videoFrame");
const title = document.getElementById("title");


if (videos[course]) {
  iframe.src = videos[course];
  title.innerText = course.toUpperCase() + " Tutorial";
} else {
  title.innerText = "Video not found";
}