
document.addEventListener('DOMContentLoaded', () => {
  const resultados = document.getElementById('resultados');

  listBooks(libros);

  function listBooks(books) {
      books.forEach(myBook => {
          createBook(myBook);
      });
  }

  function createBook(book) {
      const myBook = document.createElement('div');
      myBook.classList.add('book');

      const title = document.createElement('h2');
      title.textContent = book.titulo;

      const description = document.createElement('p');
      description.textContent = book.descripcion;

      myBook.appendChild(title);
      myBook.appendChild(description);

      resultados.appendChild(myBook);
  }
});



