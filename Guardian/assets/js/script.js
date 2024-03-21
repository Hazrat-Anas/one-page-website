const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
});

// document.addEventListener("mousedown", () => {
//   cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
// });

document.addEventListener("mouseup", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(2)`;
});