let productos = [
    {id:1, nombre:"Peluche Capitan America", precio:30, imagen:"img1.webp"},
    {id:2, nombre:"Peluche Toy Story", precio:20 , imagen:"img2.webp"},
    {id:3, nombre:"Peluche Hulk", precio:24 , imagen:"img3.webp"},
    {id:4, nombre:"Muñecos Peluches Toy Story", precio:30, imagen:"img4.webp"},
    {id:5, nombre:"Muñeco Peluche Mickey", precio:40 , imagen:"img5.webp"},
    {id:6, nombre:"Paw Patrol Peluche", precio:24 , imagen:"img6.webp"},

];

for (let producto of productos) {
    let contenido = document.createElement("div");
    contenido.className = "col-md-3 text-center";
    contenido.innerHTML = `<h3>${producto.id}</h3>
                            <p><img src="imagess/${producto.imagen}" alt="${producto.nombre}" width=180 /></p>
                            <p>${producto.nombre}</p>
                            <p><b>$${producto.precio}</b></p>`;
                                                 
    //document.body.appendChild(contenido); 
    document.getElementById("productos").appendChild(contenido);                       

}






