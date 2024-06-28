// assets/js/index.js
import { libros } from './libros.js';

document.getElementById('buscarButton').addEventListener('click', () => {
    const query = document.getElementById('tituloInput').value.toLowerCase();
    const resultados = libros.filter(libro => libro.titulo.toLowerCase().includes(query));

    const resultadosBusqueda = document.getElementById('resultadosBusqueda');
    resultadosBusqueda.innerHTML = '';

    if (resultados.length > 0) {
        resultados.forEach(libro => {
            const libroElement = document.createElement('div');
            libroElement.classList.add('libro');
            libroElement.innerHTML = `<h2>${libro.titulo}</h2><p>${libro.autor}</p>`;
            resultadosBusqueda.appendChild(libroElement);
        });
    } else {
        resultadosBusqueda.innerHTML = '<p>No se encontraron resultados.</p>';
    }
});
