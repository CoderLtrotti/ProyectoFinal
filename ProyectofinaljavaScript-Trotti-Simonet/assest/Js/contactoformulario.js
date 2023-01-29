



let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(event) {
    event.preventDefault();
    console.log(formulario.children);
    let nombre = formulario.children[0].value;
    let email = formulario.children[1].value;

    if (nombre == "") {
        alert("Ingrese su Nombre!");
        return false;
    }

    if (email == "") {
        alert("Ingrese su Mail");
        return false;
    }

    console.log("Formulario Enviado!");
    
   

}







