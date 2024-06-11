// script.js

// Lista de libros inicial
let books = [
    { title: "Libro 1", editorial: "Editorial A", stock: 10 },
    { title: "Libro 2", editorial: "Editorial B", stock: 5 },
    { title: "Libro 3", editorial: "Editorial C", stock: 2 }
];

// Función para cargar el listado de libros en la página
function loadBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        // Añadir a la lista de libros
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} - Editorial: ${book.editorial} - Stock: ${book.stock}`;
        bookList.appendChild(listItem);
    });
}

// Función para buscar y eliminar un libro
function searchAndDeleteBook() {
    const searchCriteria = document.getElementById('searchCriteria').value;
    const searchValue = document.getElementById('searchValue').value.toLowerCase();

    let bookFound = false;

    for (let i = 0; i < books.length; i++) {
        const book = books[i];
        if (
            (searchCriteria === 'title' && book.title.toLowerCase() === searchValue) ||
            (searchCriteria === 'editorial' && book.editorial.toLowerCase() === searchValue) ||
            (searchCriteria === 'stock' && book.stock.toString() === searchValue)
        ) {
            books.splice(i, 1);
            bookFound = true;
            break;
        }
    }

    if (bookFound) {
        loadBooks();
        alert('Libro eliminado con éxito');
    } else {
        alert('No se encontró un libro con ese criterio');
    }
}

// Cargar los libros al cargar la página
document.addEventListener('DOMContentLoaded', loadBooks);
