document.addEventListener('DOMContentLoaded', () => {
    const nuevosLibrosContainer = document.getElementById('resultados');
    const btnAdd = document.getElementById('btn-add');
    const modal = document.getElementById('modal');
    const btnAddBook = document.getElementById('btn-add-book');
    const data1 = document.getElementById('data1');
    const data2 = document.getElementById('data2');
    const data3 = document.getElementById('data3');
    const btnSearch = document.getElementById('btn-search');
    const searchQuery = document.getElementById('searchQuery');

    // Recuperar los libros almacenados en localStorage
    const storedBooks = getStoredBooks();
    
    // Actualiza la lista visual con los libros almacenados
    displayBooks(storedBooks, nuevosLibrosContainer);

    // Mostrar el modal al hacer clic en "Agregar Libro"
    btnAdd.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Agregar nuevo libro
    btnAddBook.addEventListener('click', () => {
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

        // Recupera los libros almacenados en localStorage
        const storedBooks = getStoredBooks();

        // Agrega el nuevo libro al array
        storedBooks.push(book);

        // Guarda el array actualizado en localStorage
        localStorage.setItem('nuevosLibros', JSON.stringify(storedBooks));

        // Actualiza la lista visual
        createBook(book, nuevosLibrosContainer);

        // Cierra el modal y limpia los campos de entrada
        modal.style.display = 'none';
        data1.value = '';
        data2.value = '';
        data3.value = '';
    });

    // Buscar libros
    btnSearch.addEventListener('click', () => {
        const query = searchQuery.value;
        const resultBooks = searchBooks(query);
        displayBooks(resultBooks, nuevosLibrosContainer);
    });

    // Función para crear y agregar un libro a la lista visual
    function createBook(book, container) {
        const bookElement = document.createElement('div');
        bookElement.className = 'book';
        bookElement.innerHTML = `
            <h3>${book.titulo}</h3>
            <p>Autor: ${book.autor}</p>
            <p>Género: ${book.genero}</p>
            <p>Idioma: ${book.idioma}</p>
            <p>Precio: ${book.precio}</p>
            <p>Formato: ${book.formato}</p>
            <p>ISBN: ${book.isbn}</p>
            <p>Descripción: ${book.descripcion}</p>
            <p>Estado: ${book.estado}</p>
            <p>Ubicación: ${book.ubicacion}</p>
            <p>Fecha de Publicación: ${book.fecha_publicacion}</p>
            <p>Editorial: ${book.editorial}</p>
            <p>Páginas: ${book.paginas}</p>
        `;
        container.appendChild(bookElement);
    }

    // Función para obtener los libros almacenados en localStorage
    function getStoredBooks() {
        return JSON.parse(localStorage.getItem('nuevosLibros')) || [];
    }

    // Función para buscar libros
    function searchBooks(query) {
        const storedBooks = getStoredBooks();
        const lowerCaseQuery = query.toLowerCase();
        
        return storedBooks.filter(book => 
            book.titulo.toLowerCase().includes(lowerCaseQuery) ||
            book.autor.toLowerCase().includes(lowerCaseQuery) ||
            book.genero.toLowerCase().includes(lowerCaseQuery)
        );
    }

    // Función para mostrar libros
    function displayBooks(books, container) {
        container.innerHTML = ''; // Limpiar el contenedor antes de mostrar nuevos resultados
        books.forEach(book => createBook(book, container));
    }
});
