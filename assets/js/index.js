import { libros } from "./libros.js";

document.getElementById('buscarButton').addEventListener('click', () => {
    const tituloBuscado = document.getElementById('tituloInput').value;
    const resultados = buscarLibroPorTitulo(tituloBuscado);
    mostrarResultados(resultados);
});
function buscarLibroPorTitulo(tituloBuscado) {
    const resultados = [];
    for (const key in libros) {
        const libro = libros[key];
        if (libro.titulo && libro.titulo.toLowerCase().includes(tituloBuscado.toLowerCase())) {
            resultados.push(libro);
        }
    }
    return resultados;
}

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultadosBusqueda');
    resultadosDiv.innerHTML = ''; // Limpiar resultados anteriores
    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p>No se encontraron libros.</p>';
    } else {
        resultados.forEach(libro => {
            const libroDiv = document.createElement('div');
            libroDiv.innerHTML = `
                <h3>${libro.titulo}</h3>
                <p>Autor: ${libro.autor}</p>
                <p>Género: ${libro.genero}</p>
                <p>Precio: $${libro.precio}</p>
                <p>Descripción: ${libro.descripcion}</p>
            `;
            resultadosDiv.appendChild(libroDiv);
        });
    }
}


