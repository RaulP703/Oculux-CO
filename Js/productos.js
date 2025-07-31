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
        <button>Agendar</button>
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

