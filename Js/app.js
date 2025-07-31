
document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
    // Aquí podrías conectar con EmailJS o Backend más adelante
    document.getElementById("mensaje-envio").style.display = "block";
    this.reset();
});
