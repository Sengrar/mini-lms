const projects = [
  "Progressive Web App",
  "Real-Time Collaboration Platform",
  "Social Media Platform",
  "Interactive Data Visualization Dashboard",
  "Grocery Delivery App",
  "Multiplayer Chess Game",
  "House Rental Platform",
  "Hospital Management System",
  "Stock Market Portfolio Tracker",
  "Hotel Booking System",
  "Inventory Management System",
  "Weather Application"
];

const container = document.getElementById("projectContainer");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <div class="project-img">Project Image</div>
    <div class="project-content">
      <h4>${project}</h4>
    </div>
  `;
  container.appendChild(card);
});
