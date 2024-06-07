const libros = {
    1: {
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        idioma: "Español",
        precio: 1000,
        formato: "Físico",
        isbn: "978-84-983-8708-4",
        descripcion: "El nombre del viento es una novela de fantasía escrita por Patrick Rothfuss. Fue publicada por la editorial de alta calidad Almadire en 2007.",
        estado: "Nuevo",
        ubicacion: "Biblioteca",
        fecha_publicacion: "2007-03-17",
        editorial: "Almadire",
        paginas: 698,
    },
    2: {
        titulo: "El temor de un hombre sabio",
        autor: "Patrick Rothfuss",
        genero: "hola",
        idioma: "Español",
        precio: 1200,
        formato: "Físico",
        isbn: "978-84-983-8728-2",
        descripcion: "El temor de un hombre sabio es la segunda novela de la serie Crónica del asesino de reyes, escrita por Patrick Rothfuss.",
        estado: "Nuevo",
        ubicacion: "Biblioteca",
        fecha_publicacion: "2011-03-01",
        editorial: "Almadire",
        paginas: 1190,
    }
};

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
    const resultadosDiv = document.getElementById('resultados');
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

document.getElementById('buscarButton').addEventListener('click', () => {
    const tituloBuscado = document.getElementById('tituloInput').value;
    const resultados = buscarLibroPorTitulo(tituloBuscado);
    mostrarResultados(resultados);
});



/*

*/ 