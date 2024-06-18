document.addEventListener('DOMContentLoaded', () => {
    const listaCosto = document.getElementById('costo');
    const listaPaginas = document.getElementById('paginas');
    const listaResultados = document.getElementById('resultadosLista');
    const botonFiltrarCostosos = document.getElementById('filtrarCostosos');
    botonFiltrarCostosos.classList.add('filtrarCostosos'); // Añadir clase CSS
    const selectOrdenar = document.getElementById('ordenar');

    function limpiarLista(lista) {
        lista.innerHTML = ''; // Limpiar la lista antes de actualizarla
    }

    function crearDetalle(detalles) {
        const fragment = document.createDocumentFragment();
        detalles.forEach(detalle => {
            const p = document.createElement('p');
            p.textContent = `${detalle.label}: ${detalle.value}`;
            fragment.appendChild(p);
        });
        return fragment;
    }

    function listarLibros(libros, lista) {
        limpiarLista(lista);

        libros.forEach(libro => {
            const libroItem = document.createElement('div');
            libroItem.classList.add('libro');

            const detalles = [
                { label: 'Título', value: libro.titulo },
                { label: 'Autor', value: libro.autor },
                { label: 'Género', value: libro.genero },
                { label: 'Idioma', value: libro.idioma },
                { label: 'Precio', value: libro.precio },
                { label: 'Editorial', value: libro.editorial },
                { label: 'Páginas', value: libro.paginas },
                { label: 'Fecha de Publicación', value: libro.fecha_publicacion },
                { label: 'Disponibilidad', value: libro.estado }
            ];

            if (libro.Image) {
                const image = document.createElement('img');
                image.classList.add('img-libro'); // Añadir clase CSS
                image.src = libro.Image;
                image.alt = libro.titulo;
                libroItem.appendChild(image);
            }

            libroItem.appendChild(crearDetalle(detalles));
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

        listarLibros(librosFiltrados, listaCosto);
    }

    function filtrarLibrosPaginas() {
        const librosFiltrados = libros.filter(libro => libro.paginas > 200);
        listarLibros(librosFiltrados, listaPaginas);
    }

    function ordenarLibros(criterio) {
        const librosOrdenados = [...libros].sort((a, b) => {
            if (criterio === 'precio') {
                const precioA = parseFloat(a.precio.replace(/[^0-9.-]+/g, ""));
                const precioB = parseFloat(b.precio.replace(/[^0-9.-]+/g, ""));
                return precioA - precioB;
            } else {
                return a[criterio].localeCompare(b[criterio]);
            }
        });
        listarLibros(librosOrdenados, listaResultados);
    }

    botonFiltrarCostosos.addEventListener('click', filtrarLibrosCostosos);

    selectOrdenar.addEventListener('change', (event) => {
        ordenarLibros(event.target.value);
    });

    listarLibros(libros, listaResultados); // Mostrar todos los libros inicialmente
    filtrarLibrosPaginas(); // Filtrar libros por páginas inicialmente
});