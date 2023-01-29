const renderProductosCarrito = () => {
    const productos_carrito = cargarProductosCarrito();
    let salida ="";

    if (totalCarrito() > 0) {
        salida = `<table class="table">
        <tbody>
        <tr>
        <td colspan="4" class="text-end"><a href="#" class="btn btn-secondary" onclick="vaciarCarrito()">Vaciar Carrito <img src="images/imagens8.png" alt="Vaciar Carrito" width="16"></a></td>
        </tr>`;
    
   
        for (let producto of productos_carrito) {
            salida += `<tr>
            <td><img src="images/${producto.imagen}" alt="${producto.nombre}" width="32" /></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td><a href="#" title="Elminar Producto"><img src="images/imagens8.png" alt="Eliminar Producto" width="16" /></a></td>`;
        }

        salida += `<tr>
        <td><b>Suma Total</b></td>
        <td><b>$${sumarCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;

    } else {
        salida = `<div class="alert- alert-secondary text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }

    document.getElementById("productos_seleccionados").innerHTML = salida;
}
  
  renderProductosCarrito();
  renderBotonCarrito();
