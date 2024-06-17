document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('costo');
    const botonFiltrarCostosos = document.getElementById('filtrarCostosos');

    function listarLibros(libros) {
        lista.innerHTML = ''; // Limpiar la lista antes de actualizarla

        libros.forEach(libro => {
            const libroItem = document.createElement('div');
            libroItem.classList.add('libro');

            const detalles = [
                { label: 'Título', value: libro.titulo },
                { label: 'Autor', value: libro.autor },
                { label: 'Género', value: libro.genero },
                { label: 'Idioma', value: libro.idioma },
                { label: 'Precio', value: libro.precio },
                { label: 'Formato', value: libro.formato },
                { label: 'ISBN', value: libro.isbn },
                { label: 'Descripción', value: libro.descripcion },
                { label: 'Disponibilidad', value: libro.estado },
                { label: 'Ubicación', value: libro.ubicacion },
                { label: 'Fecha de Publicación', value: libro.fecha_publicacion },
                { label: 'Editorial', value: libro.editorial },
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

    function filtrarLibrosCostosos() {
        const librosFiltrados = [...libros]
            .map(libro => {
                const precio = parseFloat(libro.precio.replace(/[^0-9.-]+/g, ""));
                return { ...libro, precio };
            })
            .sort((a, b) => b.precio - a.precio)
            .slice(0, 5);

        listarLibros(librosFiltrados);
    }

    botonFiltrarCostosos.addEventListener('click', filtrarLibrosCostosos);
});

function convercion(cantidad,moneda) {
    let dolar = 4100;
    let conversion;
    if (libros.precio < 10000) {
        conversion = dolar * cantidad;
        return conversion;
    }

}

convercion();