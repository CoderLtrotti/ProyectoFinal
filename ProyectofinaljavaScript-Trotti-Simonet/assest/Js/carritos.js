const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));


}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];

}

const estaEnElCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();

    return productos_carrito.some(item => item.id === id);

}

const agregarALCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();
    console.log(productos_carrito);
    const producto = productos.find(item => item.id === id);
    console.log(producto);
    productos_carrito.push(producto);
    console.log(productos_carrito);
    guardarProductosCarrito(productos_carrito);
    renderBotonCarrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    renderProductosCarrito();
    renderBotonCarrito();
}

const totalCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    return productos_carrito.length;

}

const sumarCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    return productos_carrito.reduce((total, item) => total += item.precio, 0);

}

const renderBotonCarrito = () =>  {
    let salida = `<button type="button" class="btn btn-primary position-relative">
    Inbox
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">${totalCarrito()}</span>
  </button>` ; 
  document.getElementById("boton_carrito").innerHTML = salida;

}