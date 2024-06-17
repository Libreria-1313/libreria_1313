document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('resultados');
    const selectOrdenar = document.getElementById('ordenar');

    function listarLibros(libros) {
        lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

        libros.forEach(libro => {
            const libroItem = document.createElement('div');
            libroItem.classList.add('libro');

            const titulo = document.createElement('h3');
            titulo.textContent = `Título: ${libro.titulo}`;
            libroItem.appendChild(titulo);

            const autor = document.createElement('p');
            autor.textContent = `Autor: ${libro.autor}`;
            libroItem.appendChild(autor);

            const genero = document.createElement('p');
            genero.textContent = `Género: ${libro.genero}`;
            libroItem.appendChild(genero);

            const idioma = document.createElement('p');
            idioma.textContent = `Idioma: ${libro.idioma}`;
            libroItem.appendChild(idioma);

            const precio = document.createElement('p');
            precio.textContent = `Precio: ${libro.precio}`;
            libroItem.appendChild(precio);

            const formato = document.createElement('p');
            formato.textContent = `Formato: ${libro.formato}`;
            libroItem.appendChild(formato);

            const isbn = document.createElement('p');
            isbn.textContent = `ISBN: ${libro.isbn}`;
            libroItem.appendChild(isbn);

            const descripcion = document.createElement('p');
            descripcion.textContent = `Descripción: ${libro.descripcion}`;
            libroItem.appendChild(descripcion);

            const estado = document.createElement('p');
            estado.textContent = `Disponibilidad: ${libro.estado}`;
            libroItem.appendChild(estado);

            const ubicacion = document.createElement('p');
            ubicacion.textContent = `Ubicación: ${libro.ubicacion}`;
            libroItem.appendChild(ubicacion);

            const fechaPublicacion = document.createElement('p');
            fechaPublicacion.textContent = `Fecha de Publicación: ${libro.fecha_publicacion}`;
            libroItem.appendChild(fechaPublicacion);

            const editorial = document.createElement('p');
            editorial.textContent = `Editorial: ${libro.editorial}`;
            libroItem.appendChild(editorial);

            const paginas = document.createElement('p');
            paginas.textContent = `Páginas: ${libro.paginas}`;
            libroItem.appendChild(paginas);

            lista.appendChild(libroItem);
        });
    }

    function ordenarLibros(criterio) {
        const librosOrdenados = [...libros].sort((a, b) => {
            if (criterio === 'precio') {
                // Eliminar el símbolo de la moneda y convertir a número para ordenar correctamente
                const precioA = parseFloat(a.precio.replace(/[^0-9.-]+/g, ""));
                const precioB = parseFloat(b.precio.replace(/[^0-9.-]+/g, ""));
                return precioA - precioB;
            } else {
                return a[criterio].localeCompare(b[criterio]); // Ordenar alfabéticamente
            }
        });
        listarLibros(librosOrdenados);
    }

    listarLibros(libros);

    selectOrdenar.addEventListener('change', (event) => {
        ordenarLibros(event.target.value);
    });
});



