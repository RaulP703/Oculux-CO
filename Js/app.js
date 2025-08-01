// JS
document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const mensaje = document.getElementById('respuesta-formulario');

    mensaje.style.display = 'none'; // Oculta por si estaba visible de antes

    const endpoint = 'https://script.google.com/macros/s/AKfycbwtJUjKhQiJffUNB3qpg4AwHzcmRYmnUe19sDvXvS6Isi2YiR99QKE0Cnw8-RpJ9x-y/exec';

    fetch(endpoint, {
        method: 'POST',
        body: data
    })
    .then(res => res.text())
    .then(msg => {
        mensaje.textContent = 'Mensaje enviado con éxito!';
        mensaje.style.display = 'block';
        form.reset();
    })
    .catch(err => {
        console.error('Error al enviar', err);
        mensaje.textContent = 'Hubo un error al enviar el formulario.';
        mensaje.style.display = 'block';
        mensaje.style.color = '#e74c3c'; // rojo
    });
});
