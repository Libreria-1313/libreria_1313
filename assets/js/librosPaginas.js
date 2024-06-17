document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('paginas');

    function listarLibros(libros) {
        lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

        libros.forEach(libro => {
            const libroItem = document.createElement('div');
            libroItem.classList.add('libro');

            const detalles = [
                { label: 'Título', value: libro.titulo },
                { label: 'Autor', value: libro.autor },
                { label: 'Precio', value: libro.precio },
                { label: 'Páginas', value: libro.paginas }
            ];

            detalles.forEach(detalle => {
                const p = document.createElement('p');
                p.textContent = `${detalle.label}: ${detalle.value}`;
                libroItem.appendChild(p);
            });

            lista.appendChild(libroItem);
        });
    }

    function filtrarLibrosPaginas() {
        const librosFiltrados = libros.filter(libro => libro.paginas > 200);
        listarLibros(librosFiltrados);
    }

    // Filtrar y listar libros automáticamente al cargar la página
    filtrarLibrosPaginas();
});
