// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Quita espacios extra

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Actualizar lista visible
    mostrarLista();

    // Limpiar campo
    input.value = "";
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido previo

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Generar índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener nombre
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Limpiar lista visible y array
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}
