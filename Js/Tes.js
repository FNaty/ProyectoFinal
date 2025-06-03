function mostrarFormulario() {
      document.getElementById("seccionTestimonios").classList.add("d-none");
      document.getElementById("formularioTestimonio").classList.remove("d-none");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function enviarTestimonio() {
      alert("¡Testimonio enviado (función de ejemplo)!");
      return false; // Evita que recargue la página
    }