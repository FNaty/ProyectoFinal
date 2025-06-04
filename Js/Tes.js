function mostrarFormulario() {
      document.getElementById("seccionTestimonios").classList.add("d-none");
      document.getElementById("formularioTestimonio").classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function enviarTestimonio() {
      alert("¡Testimonio enviado (función de ejemplo)!");
      return false; // Evita que recargue la página
    }
    document.addEventListener("DOMContentLoaded", mostrarTestimonios);

    function mostrarFormulario() {
      document.getElementById("seccionTestimonios").classList.add("d-none");
      document.getElementById("formularioTestimonio").classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function enviarTestimonio() {
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;
      const calificacion = parseInt(document.getElementById("calificacion").value);

      const nuevoTestimonio = { nombre, correo, mensaje, calificacion };

      let testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];
      testimonios.push(nuevoTestimonio);
      localStorage.setItem("testimonios", JSON.stringify(testimonios));

      alert("¡Testimonio guardado!");
      document.getElementById("formularioTestimonio").classList.add("d-none");
      document.getElementById("seccionTestimonios").classList.remove("d-none");
      mostrarTestimonios();
      return false;
    }

    function mostrarTestimonios() {
      const contenedor = document.getElementById("contenedorTestimonios");
      contenedor.innerHTML = "";
      const testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];

      if (testimonios.length === 0) {
        contenedor.innerHTML = "<p>No hay testimonios aún.</p>";
        return;
      }

      testimonios.forEach(t => {
        const estrellas = "⭐".repeat(t.calificacion) + "☆".repeat(5 - t.calificacion);
        const div = document.createElement("div");
        div.className = "testimonio-card";
        div.innerHTML = `
          <strong>${t.nombre}</strong>
          <p class="mb-1">${t.mensaje}</p>
          <div>${estrellas}</div>
        `;
        contenedor.appendChild(div);
      });
    }