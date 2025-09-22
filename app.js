let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, escribe un nombre válido');
    } else {
        listaAmigos.push(nombre);
        mostrarLista();
        limpiarCaja();
    }
}

// Función para limpiar el campo de texto
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Debe añadir al menos un nombre antes de sortear.');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        let amigoSecreto = listaAmigos[indiceAleatorio];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
}

function reiniciarJuego() {
    listaAmigos = [];
    limpiarCaja();
    document.getElementById('listaAmigos').innerHTML = '<li>Agrega nombres para empezar</li>';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
