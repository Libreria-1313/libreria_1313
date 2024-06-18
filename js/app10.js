// script.js

// Lista de libros inicial
let books = [
    {
        Image: "../assets/img/img1.jpeg",
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
        paginas: 471,
        stock: 10
        },
        {
        Image: "../assets/img/El nombre de la rosa.jpg",
        titulo: "El nombre de la rosa",
        autor: "Umberto Eco",
        genero: "Misterio",
        idioma: "Italiano",
        precio: "12.50 EUR",
        formato: "Físico",
        isbn: "978-84-339-1162-4",
        descripcion: "Una novela histórica y de misterio ambientada en una abadía italiana medieval.",
        estado: "Usado",
        ubicacion: "Roma, Italia",
        fecha_publicacion: "1980-01-01",
        editorial: "Bompiani",
        paginas: 592,
        stock: 15
        }
];

// Función para cargar el listado de libros en la página
function loadBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        // Añadir a la lista de libros
        const listItem = document.createElement('li');
        listItem.textContent = `${book.titulo} - Editorial: ${book.editorial} - Stock: ${book.stock}`;
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
            (searchCriteria === 'title' && book.titulo.toLowerCase() === searchValue) ||
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
