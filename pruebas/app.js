newBook.addEventListener('click', () => {
    const book = {
        titulo: data1.value,
        autor: data2.value,
        genero: data3.value,
        idioma: "Español",
        precio: 25000,
        formato: "Físico",
        isbn: "978-84-7967-664-4",
        descripcion: "Una historia de autoconocimiento y búsqueda de la felicidad.",
        estado: "Nuevo",
        ubicacion: "Librería Nacional",
        fecha_publicacion: "1988",
        editorial: "Planeta",
        paginas: 208
    };

    nuevosLibros.push(book); // Agrega el nuevo libro al array nuevosLibros
    console.log(nuevosLibros);

    // Lógica para guardar nuevos libros en nuevosLibros.js
    const script = document.createElement('script');
    script.src = 'nuevosLibros.js';
    document.head.appendChild(script);
    
    createBook(book, nuevosLibrosContainer); // Agrega el nuevo libro a la lista visual
    document.getElementById('modal').style.display = 'none';
    data1.value = '';
    data2.value = '';
    data3.value = '';
});
