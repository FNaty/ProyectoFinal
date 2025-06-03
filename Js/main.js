const toggleBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});
function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}
function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}
window.onclick = function(event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};
