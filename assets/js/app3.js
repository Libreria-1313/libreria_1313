import { libros } from './libros.js';

const divbooks = document.getElementById('divbooks');
const libroSelect = document.getElementById('libro-select');

// Cargar libros cuando se carga la página
loadBooks();

function listBooks() {
    divbooks.innerHTML = ''; // Limpiar contenido anterior

    libros.forEach(book => {
        createBook(book); // Llamar a createBook para cada libro
        addBookOption(book); // Agregar opción al selector
    });
}

function loadBooks() {
    divbooks.innerHTML = ''; // Limpiar contenido anterior

    libros.forEach((book, index) => {
        createBook(book); // Llamar a createBook para cada libro
        addBookOption(book); // Agregar opción al selector
    });

    // Opcionalmente, mostrar el primer libro por defecto
    if (libros.length > 0) {
        showBookDetails(libros[0].titulo); // Mostrar los detalles del primer libro por defecto
    }
}

function createBook(book) {
    const myBook = document.createElement('div');
    myBook.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = book.titulo;

    const image = document.createElement('img');
    image.src = book.Image; // Asigna la URL de la imagen desde el objeto book
    image.alt = book.titulo; // Agrega un atributo alt para accesibilidad

    const autor = document.createElement('p');
    autor.textContent = `Autor: ${book.autor}`;

    const genero = document.createElement('p');
    genero.textContent = `Género: ${book.genero}`;

    const idioma = document.createElement('p');
    idioma.textContent = `Idioma: ${book.idioma}`;

    const precio = document.createElement('p');
    precio.textContent = `Precio: ${book.precio}`;

    const formato = document.createElement('p');
    formato.textContent = `Formato: ${book.formato}`;

    const isbn = document.createElement('p');
    isbn.textContent = `ISBN: ${book.isbn}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = `Descripción: ${book.descripcion}`;

    const estado = document.createElement('p');
    estado.textContent = `Estado: ${book.estado}`;

    const ubicacion = document.createElement('p');
    ubicacion.textContent = `Ubicación: ${book.ubicacion}`;

    const fecha = document.createElement('p');
    fecha.textContent = `Fecha de publicación: ${book.fecha_publicacion}`;

    const editorial = document.createElement('p');
    editorial.textContent = `Editorial: ${book.editorial}`;

    const paginas = document.createElement('p');
    paginas.textContent = `Páginas: ${book.paginas}`;

    const stock = document.createElement('p');
    stock.textContent = `Stock: ${book.stock}`;

    const stockContainer = document.createElement('div');

    const stockLabel = document.createElement('label');
    stockLabel.textContent = 'Stock: ';

    const stockValue = document.createElement('span');
    stockValue.textContent = book.stock;

    const increaseStockButton = document.createElement('button');
    increaseStockButton.textContent = '+';
    increaseStockButton.addEventListener('click', () => increaseStock(book));

    const decreaseStockButton = document.createElement('button');
    decreaseStockButton.textContent = '-';
    decreaseStockButton.addEventListener('click', () => decreaseStock(book));

    const comprarButton = document.createElement('button');
    comprarButton.textContent = `comprar`;
    comprarButton.addEventListener('click', () => comprarLibro(book));

    // Añadir elementos al contenedor de cada libro
    myBook.appendChild(title);
    myBook.appendChild(image);
    myBook.appendChild(autor);
    myBook.appendChild(genero);
    myBook.appendChild(idioma);
    myBook.appendChild(precio);
    myBook.appendChild(formato);
    myBook.appendChild(isbn);
    myBook.appendChild(descripcion);
    myBook.appendChild(estado);
    myBook.appendChild(ubicacion);
    myBook.appendChild(fecha);
    myBook.appendChild(editorial);
    myBook.appendChild(paginas);
    myBook.appendChild(stock);
    stockContainer.appendChild(stockLabel);
    stockContainer.appendChild(stockValue);
    stockContainer.appendChild(increaseStockButton);
    stockContainer.appendChild(decreaseStockButton);
    myBook.appendChild(comprarButton); // Agregar el botón de comprar al libro

    // Añadir el contenedor del stock al libro
    myBook.appendChild(stockContainer);

    // Añadir el libro al contenedor principal
    divbooks.appendChild(myBook);
}

  // Función para buscar y eliminar un libro
  function searchAndDeleteBook() {
    const searchCriteria = document.getElementById('searchCriteria').value;
    const searchValue = document.getElementById('searchValue').value.toLowerCase();

    let bookFound = false;

    for (let i = 0; i < libros.length; i++) {
        const book = libros[i];
        if (
            (searchCriteria === 'titulo' && book.titulo.toLowerCase() === searchValue) ||
            (searchCriteria === 'editorial' && book.editorial.toLowerCase() === searchValue) ||
            (searchCriteria === 'precio' && book.precio.toLowerCase() === searchValue) // Modificar según los criterios de búsqueda necesarios
        ) {
            libros.splice(i, 1);
            bookFound = true;
            break;
        }
    }

    if (bookFound) {
        listBooks(); // Actualizar la lista de libros después de eliminar
        alert('Libro eliminado con éxito');
    } else {
        alert('No se encontró un libro con ese criterio');
    }
}

function increaseStock(book) {
    book.stock++; // Incrementa el stock del libro seleccionado
    listBooks(); // Vuelve a renderizar la lista de libros para mostrar el cambio
}

function decreaseStock(book) {
    if (book.stock > 0) {
        book.stock--; // Decrementa el stock del libro seleccionado solo si es mayor que cero
        listBooks(); // Vuelve a renderizar la lista de libros para mostrar el cambio
    } else {
        alert('El stock ya está en cero.'); // Avisa al usuario si el stock es cero y no se puede decrementar más
    }
}

function addBookOption(book) {
    const option = document.createElement('option');
    option.value = book.titulo; // El valor del option será el título del libro
    option.textContent = book.titulo; // El texto visible será también el título

    libroSelect.appendChild(option);
}

libroSelect.addEventListener('change', (event) => {
    const selectedBookTitle = event.target.value;
    showBookDetails(selectedBookTitle);
});

function showBookDetails(selectedBookTitle) {
    const selectedBook = libros.find(book => book.titulo === selectedBookTitle);

    // Mostrar detalles del libro seleccionado en algún elemento del DOM (por ejemplo, en un div con id "book-details")
    const bookDetails = document.getElementById('book-details');
    bookDetails.innerHTML = ''; // Limpiar contenido anterior

    const title = document.createElement('h2');
    title.textContent = selectedBook.titulo;

    const image = document.createElement('img');
    image.src = selectedBook.Image;
    image.alt = selectedBook.titulo;

    const author = document.createElement('p');
    author.textContent = `Autor: ${selectedBook.autor}`;

    // Agregar más detalles del libro según necesites

    // Añadir elementos al contenedor de detalles del libro
    bookDetails.appendChild(title);
    bookDetails.appendChild(image);
    bookDetails.appendChild(author);

    // Incluir aquí los demás detalles del libro que desees mostrar
}

// Función para cambiar la editorial de un libro seleccionado
function cambiarEditorial() {
    const nuevaEditorial = document.getElementById('nueva-editorial-input').value;
    const selectedBookTitle = libroSelect.value;

    if (selectedBookTitle) {
        const selectedBook = libros.find(book => book.titulo === selectedBookTitle);
        selectedBook.editorial = nuevaEditorial;
        alert(`La editorial ha sido cambiada a: "${nuevaEditorial}" para el libro seleccionado`);
        listBooks(); // Actualizar la lista de libros mostrados
    } else {
        alert('Por favor, selecciona un libro');
    }
}

function agregarNuevoLibro() {
    const nuevoLibro = {};

    // Recolectar información del nuevo libro utilizando prompt
    nuevoLibro.titulo = prompt('Ingrese el título del libro:');
    nuevoLibro.autor = prompt('Ingrese el autor del libro:');
    nuevoLibro.genero = prompt('Ingrese el género del libro:');
    nuevoLibro.idioma = prompt('Ingrese el idioma del libro:');
    nuevoLibro.precio = parseInt(prompt('Ingrese el precio del libro en EUR:'));
    nuevoLibro.formato = prompt('Ingrese el formato del libro:');
    nuevoLibro.isbn = parseInt(prompt('Ingrese el ISBN del libro:'));
    nuevoLibro.descripcion = prompt('Ingrese la descripción del libro:');
    nuevoLibro.estado = prompt('Ingrese el estado del libro (Nuevo/Usado):');
    nuevoLibro.ubicacion = prompt('Ingrese la ubicación del libro:');
    nuevoLibro.fecha_publicacion = prompt('Ingrese la fecha de publicación del libro en formato AAAA-MM-DD:');
    nuevoLibro.editorial = prompt('Ingrese la editorial del libro:');
    nuevoLibro.paginas = parseInt(prompt('Ingrese el número de páginas del libro:'));
    nuevoLibro.stock = parseInt(prompt('Ingrese el stock inicial del libro:'));
    nuevoLibro.Image = prompt('Ingrese la URL de la imagen del libro:');

    // Validar que se ingresen todos los campos obligatorios antes de agregar el libro
    if (
        nuevoLibro.titulo &&
        nuevoLibro.autor &&
        nuevoLibro.genero &&
        nuevoLibro.idioma &&
        nuevoLibro.precio &&
        nuevoLibro.formato &&
        nuevoLibro.isbn &&
        nuevoLibro.descripcion &&
        nuevoLibro.estado &&
        nuevoLibro.ubicacion &&
        nuevoLibro.fecha_publicacion &&
        nuevoLibro.editorial &&
        !isNaN(nuevoLibro.paginas) &&
        !isNaN(nuevoLibro.stock) &&
        nuevoLibro.Image
    ) {
        libros.push(nuevoLibro); // Agregar el nuevo libro al arreglo libros
        listBooks(libros); // Actualizar la lista de libros mostrados (esto es una función hipotética, deberías reemplazarlo con tu lógica de actualización)
        alert('Libro agregado con éxito!');
    } else {
        alert('Por favor, complete todos los campos correctamente, incluyendo la URL de la imagen.');
    }
}


















  