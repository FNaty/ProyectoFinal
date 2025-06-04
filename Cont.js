function enviarMensaje() {
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const mensaje = document.getElementById("mensaje").value;

      const nuevoMensaje = { nombre, correo, mensaje, fecha: new Date().toLocaleString() };

      let mensajes = JSON.parse(localStorage.getItem("mensajesContacto")) || [];
      mensajes.push(nuevoMensaje);
      localStorage.setItem("mensajesContacto", JSON.stringify(mensajes));

      alert("¡Mensaje enviado correctamente!");
      document.querySelector("form").reset();
      return false;
    }