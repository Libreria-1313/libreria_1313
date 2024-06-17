const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: "15.99 EUR",
        formato: "Físico",
        isbn: "978-3-16-148410-0",
        descripcion: "Una de las obras más importantes de la literatura hispanoamericana.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1967-06-05",
        editorial: "Editorial Sudamericana",
        paginas: 471
    },
    // Aquí van los demás libros
];

function mostrarLibros() {
    const listaLibros = document.getElementById('listaLibros');

    // Limpiar la lista de libros antes de mostrar nuevamente
    listaLibros.innerHTML = '';

    libros.forEach(libro => {
        const divLibro = document.createElement('div');
        divLibro.classList.add('libro');

        divLibro.innerHTML = `
            <h2>${libro.titulo}</h2>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p><strong>Precio:</strong> ${libro.precio}</p>
            <p><strong>Descripción:</strong> ${libro.descripcion}</p>
        `;

        listaLibros.appendChild(divLibro);
    });
}

function aplicarDescuentoClick() {
    libros.forEach(libro => {
        let precioActual = parseFloat(libro.precio.split(" ")[0]); // Convertir el precio a un número
        precioActual *= 0.9; // Aplicar descuento del 10%
        libro.precio = `${precioActual.toFixed(2)} EUR`; // Actualizar el precio del libro
    });

    mostrarLibros(); // Mostrar los libros actualizados después de aplicar descuento
}

function restaurarDescuentoClick() {
    libros.forEach(libro => {
        // Aquí podrías tener una propiedad en cada libro que almacene el precio original para restaurarlo.
        libro.precio = "15.99 EUR"; // Restaurar el precio original (en este caso, asumido estático)
    });

    mostrarLibros(); // Mostrar los libros con los precios restaurados
}

// Mostrar los libros al cargar la página
mostrarLibros();