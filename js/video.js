const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const videos = {
  // Frontend
  html: "https://www.youtube.com/embed/HcOc7P5BMi4",          // HTML Full Course
  css: "https://www.youtube.com/embed/ESnrn1kAD4E",           // CSS Full Course
  js: "https://www.youtube.com/embed/VlPiVmYuoqw",            // JavaScript Full Course
  react: "https://www.youtube.com/embed/bMknfKXIFA8",         // React Full Course

  // Backend
  node: "https://www.youtube.com/embed/Oe421EPjeBE",          // Node.js Full Course
  django: "https://www.youtube.com/embed/F5mRW0jo-U4",        // Django Full Course
  python: "https://www.youtube.com/embed/rfscVS0vtbw",        // Python Full Course

  // Database & Tools
  sql: "https://www.youtube.com/embed/HXV3zeQKqGY",           // SQL Full Course
  git: "https://www.youtube.com/embed/RGOj5yH7evk"            // Git & GitHub Full Course
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