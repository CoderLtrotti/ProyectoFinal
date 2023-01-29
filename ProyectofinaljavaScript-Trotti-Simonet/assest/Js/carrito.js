const productos = [
    {id:1, nombre:"Muñeco Mickey", precio:30, stock:10},
    {id:2, nombre:"Muñeco bob esponja", precio:20, stock:8},
    {id:3, nombre:"Muñeco Pokemon", precio:24, stock:10},
    {id:4, nombre:"Muñeco Dragon ball", precio:30, stock:7},
    {id:5, nombre:"Muñeco Stars Wars", precio:50, stock:10},
    {id:6, nombre:"Muñeco Tranformers", precio:40, stock:10},
    {id:7, nombre:"Muñeco Spiderman", precio:40, stock:9},
    {id:8, nombre:"Muñeco Capitan America", precio:35, stock:10},
    {id:9, nombre:"Muñeco Thor", precio:45, stock:6},
    {id:10, nombre:"Muñeco Batman", precio:60, stock:10},
];
const productos_carrito = [];
          //const productos_carrito = [];

class Producto {
constructor (id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.iva = 21;
}

aplicarIVA() {
    this.precio = this.precio + ((this.precio * this.iva) / 100);
}

}

function buscarProducto(id) {
return (productos.find(item => item.id === id) || null);
}

function agregarProducto(producto) {
productos_carrito.push(producto);

}

function eliminarProducto(id) {
let pos = productos_carrito.findIndex(item => item.id === id);
if (pos > -1) {
    productos_carrito.splice(pos, 1);
}

console.log(pos);


}

function recorrerProductos() {
let contenido_productos = "";


for (let producto of productos) {
     contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
}

return contenido_productos;
}


function recorrerProductosCarrito() {
let contenido_productos = "";


for (let producto of productos_carrito) {
     contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
}

return contenido_productos;
}

let cargarProducto = true;
          /*
          // realizo la carga de productos catalogo 
          let cargarProducto = true;

          while (cargarProducto) {

            let id_producto = productos.length + 1;
            let nombre_producto = prompt("Ingrese el Nombre del Producto:")
            let precio_producto = parseFloat(prompt("Ingrese el Precio del Producto:"));
            let stock_producto = parseInt(prompt("Ingrese el Stock del Producto:"));
            let producto = new Producto(id_producto, nombre_producto, precio_producto, stock_producto);
            console.log(producto);
            productos.push(producto);
            console.log(producto);


            cargarProducto = confirm("Desea agregar otro producto?");
            console.log(cargarProducto);


          }

          */



          //carga de productos en el carrito 

cargarProducto = true;

          

while (cargarProducto) {
let contenido_productos = recorrerProductos();

let id_producto = parseInt(prompt("Seleccione el producto a agregar al carrito :\n\n" + contenido_productos));

let producto = buscarProducto(id_producto);


//verifico el producto

if (producto != null) {

//agregar el producto 

    productos_carrito.push(producto);
} else {
             alert("Producto inexistente: " + id_producto + "!");
 }
//Pregunto si desea continuar cargando productos 
cargarProducto = confirm("Desea agregar otro Producto al Carrito?");
}


//Realizo la eliminacion
cargarProducto = true;

while (cargarProducto) {
let contenido_productos = recorrerProductosCarrito();



let id_producto = parseInt(prompt("Seleccione el Producto que desea eliminar del Carrito : (0 - Salir)\n\n" + contenido_productos));

if (id_producto > 0) {
    eliminarProducto(id_producto);
} else {
    alert("Producto inexistente: " + id_producto + "!");
}


cargarProducto = confirm("Desea eliminar otro Producto del Carrito?");
}

let suma_total = 0;
let contenido_productos = "";

for (let producto of productos_carrito) {

suma_total += producto.precio;

}

alert("\n\nTotal a Pagar $" + suma_total);


console.log(productos_carrito)





