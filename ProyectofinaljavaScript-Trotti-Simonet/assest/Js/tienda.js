    


            let a = 10;
            let b = 10;
            let c = 3 + 2;
            let d = parseInt (a) + b ;

            // A es igual B

            if (a == b) {
                console.log("A es igual a B!");
            }
               // A es estrictamente igual que B

               if (a === c) {
                console.log("A es estrictamente igual a B!");

            }

               // A es distinto de B

               if (a != b) {
                console.log("A es distinto de B!");
            }

              //A es estrictamente distinto de B
              
              if (a !==b) {
                console.log("A es estrictamente distinto de B!");
              }
              if ((a == 10) && (b == 10)) {
                console.log("A y B valen igual a 10!");

              }

              if (a == 10 || b == 10) {
                console.log("A o B valen igual a 10!");

              }

              if (!(a >= 5)) {
                console.log("A es mayor o igual que 5!")
              }

              
              let nombreIngresado = prompt("Ingrese nombre del producto");

              if ((nombreIngresado == "spiderman") || (nombreIngresado == "spiderman") || (nombreIngresado == "spiderman")) {
                alert("El nombre ingresado es spiderman");
              } else {
                alert("El nombre ingresado no es spiderman");
              }

              if ((nombreIngresado == "thor") || (nombreIngresado == "thor") || (nombreIngresado == "thor")) {
                alert("El nombre ingresado es thor");
              } else {
                alert("El nombre ingresado no es thor");
              }

              if ((nombreIngresado == "batman") || (nombreIngresado == "batman") || (nombreIngresado == "batman")) {
                alert("El nombre ingresado es batman");
              } else {
                alert("El nombre ingresado no es batman");
              }

              if ((nombreIngresado == "tranformers") || (nombreIngresado == "tranformers") || (nombreIngresado == "tranformers")) {
                alert("El nombre ingresado es tranformers");
              } else {
                alert("El nombre ingresado no es tranformers");
              }

              if ((nombreIngresado == "capitan america") || (nombreIngresado == "capitan america") || (nombreIngresado == "capitan america")) {
                alert("El nombre ingresado es capitan america");
              } else {
                alert("El nombre ingresado no es capitan america");
              }

              if ((nombreIngresado == "stars wars") || (nombreIngresado == "stars wars") || (nombreIngresado == "stars wars")) {
                alert("El nombre ingresado es stars wars");
              } else {
                alert("El nombre ingresado no es stars wars");
              }
                
              /*


                
                

                cargarProducto = confirm("Desea agregar otro producto?");
              

              cargarProducto = true;
              let contenido_productos = "";

              while (cargarProducto) {
                for (let producto of productos) {
                  contenido_productos += producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
                }

                let producto = prompt("Seleccione el Producto a agregar al Carrito:\n" + contenido_productos);
                console.log(producto);

                cargarProducto = confirm("Desea agregar otro Producto?");
              }

              function bucarProducto(id) {
                return productos.find(item => item.id === id)
              }


              */





