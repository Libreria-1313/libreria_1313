// app.js
function listarLibros(libros) {
    const lista = document.getElementById('lista-libros');
    
    libros.forEach(libro => {
        const libroItem = document.createElement('div');
        libroItem.classList.add('libro');

        const titulo = document.createElement('h3');
        titulo.textContent = `Título: ${libro.titulo}`;
        libroItem.appendChild(titulo);

        const autor = document.createElement('p');
        autor.textContent = `Autor: ${libro.autor}`;
        libroItem.appendChild(autor);

        const idioma = document.createElement('p');
        idioma.textContent = `Idioma: ${libro.idioma}`;
        libroItem.appendChild(idioma);

        const editorial = document.createElement('p');
        editorial.textContent = `Editorial: ${libro.editorial}`;
        libroItem.appendChild(editorial);

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${libro.precio}`;
        libroItem.appendChild(precio);

        const estado = document.createElement('p');
        estado.textContent = `Disponibilidad: ${libro.estado}`;
        libroItem.appendChild(estado);

        lista.appendChild(libroItem);
    });
}

// Asegúrate de que este código se ejecuta después de que el archivo libros.js ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    listarLibros(libros);
});

function listBooks(books) {
    books.forEach(myBook => {
      createBook(myBook)
    });
  }
  
  function createBook (book) {
    const myBook = document.createElement('div')
    myBook.classList.add('book')
  
    const title = document.createElement('h2')
    title.textContent = book.titulo
  
    const description = document.createElement('p')
    description.textContent = book.descripcion
  
    myBook.appendChild(title)
    myBook.appendChild(description)
  
    body.appendChild(myBook)
  
  }
  