function lista(biblioteca) {
    biblioteca.libros.forEach(libro => {
        console.log(`Título: ${libro.titulo}`);
        console.log(`Autor: ${libro.autor}`);
        console.log(`Idioma: ${libro.idioma}`);
        console.log(`Editorial: ${libro.editorial}`);
        console.log(`Precio: ${libro.precio}`);
        console.log(`Disponibilidad: ${libro.estado}`);
        console.log('--------------------------');
    });
}

lista(biblioteca);
