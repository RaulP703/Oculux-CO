document.addEventListener('DOMContentLoaded', function() {
    let indice = 0;
    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        // Asegúrate de que el primer slide tenga la clase "activo"
        slides[indice].classList.add("activo");

        function mostrarSiguiente() {
            slides[indice].classList.remove("activo");
            indice = (indice + 1) % slides.length;
            slides[indice].classList.add("activo");
        }

        setInterval(mostrarSiguiente, 4000);
    }
});