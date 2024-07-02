let numSecreto= 0; 
let intentos=0;
let listaNumSorteado= [];
let numMax =10;

function asignarTextoElemento(elemento,texto){ // funcion que lleva por parametro un elemento y el texto
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //
}

//funcion que se manda a llamar con el onclick()
function verificarIntento(){
    let numUser =parseInt(document.getElementById('numUsuario').value);
    
    if (numUser ===numSecreto){//el === valida el tipo de dato y los valores
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acerto
        if(numUser>numSecreto){
            asignarTextoElemento('p','el número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#numUsuario').value = '';
    return;
}
function generarNumSecreto() {
    let numGenerado = Math.floor(Math.random()*numMax)+1;
    console.log(numGenerado);
    console.log(listaNumSorteado);
    if(listaNumSorteado.length== numMax ){
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    }else{
        if (listaNumSorteado.includes(numGenerado)) {
            return generarNumSecreto();
        } else{
            listaNumSorteado.push(numGenerado);
            return numGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un nùmero del 1 al ${numMax}`);
    numSecreto = generarNumSecreto();
    intentos = 1
    return;
}
function reiniciarJuego(){
    //1.-limpiar imput, 
    limpiarCaja();
    // 2.-mensaje de inicio, 
    //3.- número aleatorio, 
    // 4.- limpiar intentos, 
    condicionesIniciales();
    // 5.- deshabilitar botón reinicio
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}

condicionesIniciales();