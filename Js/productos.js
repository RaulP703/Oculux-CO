const contenedor = document.getElementById("contenedor-productos");
const filtroCategoria = document.getElementById("filtro-categoria");

// Función para renderizar productos
function renderProductos(lista) {
    contenedor.innerHTML = "";
    lista.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card-producto");

        card.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button class="ver-mas-btn" data-id="${producto.id}">Ver más</button>
        `;

        contenedor.appendChild(card);
    });
}

// Inicial: mostrar todos
renderProductos(productos);

// Cambiar filtro
filtroCategoria.addEventListener("change", () => {
    const categoriaSeleccionada = filtroCategoria.value;

    if (categoriaSeleccionada === "todas") {
        renderProductos(productos);
    } else {
        const filtrados = productos.filter(
        (p) => p.categoria.toLowerCase() === categoriaSeleccionada.toLowerCase()
        );
        renderProductos(filtrados);
    }
});

const generoSelect = document.getElementById("filtro-genero");

generoSelect.addEventListener("change", filtrarProductos);
filtroCategoria.addEventListener("change", filtrarProductos);

function filtrarProductos() {
    const generoSeleccionado = generoSelect.value.toLowerCase();
    const categoriaSeleccionada = filtroCategoria.value.toLowerCase();

    const productosFiltrados = productos.filter(producto => {
        const generoProducto = producto.genero?.toLowerCase() || "";
        const categoriaProducto = producto.categoria?.toLowerCase() || "";

        const coincideGenero = generoSeleccionado === "todas" || generoProducto === generoSeleccionado;
        const coincideCategoria = categoriaSeleccionada === "todas" || categoriaProducto === categoriaSeleccionada;

        return coincideGenero && coincideCategoria;
    });

    renderProductos(productosFiltrados);
}


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ver-mas-btn")) {
        const id = e.target.getAttribute("data-id");
        const producto = productos.find(p => p.id == id);

        // Llenamos los datos del modal
        document.getElementById("modal-img").src = producto.imagen;
        document.getElementById("modal-nombre").textContent = producto.nombre;
        document.getElementById("modal-precio").textContent = `$${producto.precio}`;
        document.getElementById("modal-categoria").textContent = `Categoría: ${producto.categoria}`;
        document.getElementById("modal-genero").textContent = `Género: ${producto.genero}`;
        document.getElementById("modal-descripcion").textContent = producto.descripcion;

        document.getElementById("modal-producto").classList.remove("oculto");
    }
});

document.getElementById("cerrar-modal").addEventListener("click", () => {
    document.getElementById("modal-producto").classList.add("oculto");
});
