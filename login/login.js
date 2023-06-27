//obtener referencias a los elementos del formulario
const formulario = document.getElementById('login')
const correoInput = document.getElementById('correo')
const contraseñaInput = document.getElementById('password')
const botonInicioSesion = document.getElementById('button')


botonInicioSesion.addEventListener('click', function(event){
    event.preventDefault(); //Evitar que el form se envie automaticamente


    //realizar las validaciones
    if (!validarCorreo(correoInput.value)){
        mostrarError(correoInput, 'Por favor ingrese un correo valido')
    }else if (contraseñaInput.value ===''){
        mostrarError(contraseñaInput, 'Por favor ingrese contraseña valida')
    }else{
        //si todas las validaciones son exitosas puede continuar con el envio de datos
        formulario.submit
    }
})

//funcion para validar formato de correo electronico

function validarCorreo(correo){
    //utilizar una expresion regular para verificar si el correo tiene un formato valido
    const regexCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}.){1,125}[A-Z]{2,63}$/i
    return regexCorreo.test(correo)
}

function mostrarError (input, mensaje){
const errorMensaje = document.createElement('p') //aqui nos crea un elemnto de html <p> donde se va a almacenar en caso de error
errorMensaje.className = 'error-mensaje'
errorMensaje.textContent = mensaje

const contenedorInput = input.parentElement;
contenedorInput.appendChild(errorMensaje)

//agregar una clase de estilo para resaltar el campo con error
contenedorInput.className.add('error');
}

//limpiar los mensajes de error al escribir en los campos
correoInput.addEventListener('input', limpiarError);
contraseñaInput.addEventListener('input', limpiarError);

function limpiarError (){
    const contenedorInput = this.parentElement;
    const errorMensaje = contenedorInput.querySelector('.error-mensaje');

    if(errorMensaje){
        contenedorInput.removeChild(errorMensaje);
        contenedorInput.clasList.remve('error');
    }
}