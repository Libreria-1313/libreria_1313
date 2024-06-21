const libros = [
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
    stock: 15
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
    },
    {
    Image: "../assets/img/Sapiens De animales a dioses_.jpg",
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    genero: "Investigación",
    idioma: "Español",
    precio: "20.00 EUR",
    formato: "Físico",
    isbn: "978-84-9992-443-6",
    descripcion: "Una breve historia de la humanidad, desde la prehistoria hasta la era moderna.",
    estado: "Nuevo",
    ubicacion: "Barcelona, España",
    fecha_publicacion: "2011-01-01",
    editorial: "Debate",
    paginas: 496,
    stock: 15
    },
    {
    Image: "../assets/img/La sombra del viento.jpg",
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    genero: "Novela",
    idioma: "Español",
    precio: "14.99 EUR",
    formato: "eBook",
    isbn: "978-84-322-1084-2",
    descripcion: "Un misterio literario ambientado en la Barcelona de mediados del siglo XX.",
    estado: "Nuevo",
    ubicacion: "Barcelona, España",
    fecha_publicacion: "2001-01-01",
    editorial: "Planeta",
    paginas: 576,
    stock: 15
    },
    {
    Image: "../assets/img/El alquimista.jpg",
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    genero: "Ficción",
    idioma: "Portugués",
    precio: "13.99 USD",
    formato: "Físico",
    isbn: "978-0-06-112241-5",
    descripcion: "Una novela sobre el viaje de un joven pastor en busca de su destino.",
    estado: "Nuevo",
    ubicacion: "Lisboa, Portugal",
    fecha_publicacion: "1988-01-01",
    editorial: "HarperOne",
    paginas: 208,
    stock: 15
    },
    {
    Image: "../assets/img/Orgullo y prejuicio.jpg",
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    genero: "Romance",
    idioma: "Inglés",
    precio: "9.99 USD",
    formato: "eBook",
    isbn: "978-0-19-953556-9",
    descripcion: "Una novela clásica que explora las dificultades del amor y las relaciones en la sociedad del siglo XIX.",
    estado: "Nuevo",
    ubicacion: "Londres, Reino Unido",
    fecha_publicacion: "1813-01-28",
    editorial: "T. Egerton",
    paginas: 279,
    stock: 15
    },
    {
    Image: "../assets/img/Don Quijote de la Mancha.jpg",
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    genero: "Aventura",
    idioma: "Español",
    precio: "18.99 EUR",
    formato: "Físico",
    isbn: "978-84-376-0494-7",
    descripcion: "Una de las obras más influyentes de la literatura occidental, que narra las aventuras de un caballero y su escudero.",
    estado: "Nuevo",
    ubicacion: "Madrid, España",
    fecha_publicacion: "1605-01-16",
    editorial: "Francisco de Robles",
    paginas: 863,
    stock: 15
    },
    {
    Image: "../assets/img/Crimen y castigo.jpg",
    titulo: "Crimen y castigo",
    autor: "Fiódor Dostoyevski",
    genero: "Drama",
    idioma: "Ruso",
    precio: "11.99 USD",
    formato: "eBook",
    isbn: "978-0-14-305814-4",
    descripcion: "Una novela que explora los dilemas morales de un joven estudiante en San Petersburgo.",
    estado: "Nuevo",
    ubicacion: "San Petersburgo, Rusia",
    fecha_publicacion: "1866-01-01",
    editorial: "The Russian Messenger",
    paginas: 671,
    stock: 15
    },
    {
    Image: "../assets/img/El gran Gatsby.jpg",
    titulo: "El gran Gatsby",
    autor: "F. Scott Fitzgerald",
    genero: "Novela",
    idioma: "Inglés",
    precio: "10.00 USD",
    formato: "Físico",
    isbn: "978-0-7432-7356-5",
    descripcion: "Una novela que retrata la vida de la alta sociedad estadounidense en los años 20.",
    estado: "Nuevo",
    ubicacion: "Nueva York, EE.UU.",
    fecha_publicacion: "1925-04-10",
    editorial: "Charles Scribner's Sons",
    paginas: 180,
    stock: 15
    },
    {
    Image: "../assets/img/Matar a un ruiseñor.jpg",
    titulo: "Matar a un ruiseñor",
    autor: "Harper Lee",
    genero: "Ficción",
    idioma: "Inglés",
    precio: "12.99 USD",
    formato: "eBook",
    isbn: "978-0-06-112008-4",
    descripcion: "Una novela que aborda temas de raza y justicia en el sur de Estados Unidos.",
    estado: "Nuevo",
    ubicacion: "Monroeville, EE.UU.",
    fecha_publicacion: "1960-07-11",
    editorial: "J.B. Lippincott & Co.",
    paginas: 324,
    stock: 15
    },
    {
    Image: "../assets/img/El señor de los anillos.jpg",
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasía",
    idioma: "Inglés",
    precio: "25.00 USD",
    formato: "Físico",
    isbn: "978-0-618-00222-8",
    descripcion: "Una épica trilogía que sigue las aventuras de Frodo Bolsón y la comunidad del anillo.",
    estado: "Nuevo",
    ubicacion: "Oxford, Reino Unido",
    fecha_publicacion: "1954-07-29",
    editorial: "Allen & Unwin",
    paginas: 1216,
    stock: 15
    },
    {
    Image: "../assets/img/Cumbres borrascosas.jpg",
    titulo: "Cumbres borrascosas",
    autor: "Emily Brontë",
    genero: "Romance",
    idioma: "Inglés",
    precio: "8.99 USD",
    formato: "eBook",
    isbn: "978-0-14-143955-6",
    descripcion: "Una novela clásica que narra una intensa historia de amor y venganza en los páramos de Yorkshire.",
    estado: "Nuevo",
    ubicacion: "Yorkshire, Reino Unido",
    fecha_publicacion: "1847-12-01",
    editorial: "Thomas Cautley Newby",
    paginas: 416,
    stock: 15
    },
    {
    Image: "../assets/img/El retrato de Dorian Gray.jpg",
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    genero: "Ficción",
    idioma: "Inglés",
    precio: "9.50 USD",
    formato: "Físico",
    isbn: "978-0-14-143957-0",
    descripcion: "Una novela que explora la decadencia moral de un joven que desea mantenerse eternamente joven.",
    estado: "Usado",
    ubicacion: "Dublín, Irlanda",
    fecha_publicacion: "1890-06-20",
    editorial: "Lippincott's Monthly Magazine",
    paginas: 254,
    stock: 15
    },
    {
    Image: "../assets/img/La metamorfosis.jpg",
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    genero: "Ficción",
    idioma: "Alemán",
    precio: "6.99 EUR",
    formato: "eBook",
    isbn: "978-3-596-90357-5",
    descripcion: "Una novela corta que narra la transformación de un hombre en un insecto gigante.",
    estado: "Nuevo",
    ubicacion: "Praga, República Checa",
    fecha_publicacion: "1915-01-01",
    editorial: "Kurt Wolff Verlag",
    paginas: 96,
    stock: 15
    },
    {
    Image: "../assets/img/En busca del tiempo perdido.jpg",
    titulo: "En busca del tiempo perdido",
    autor: "Marcel Proust",
    genero: "Ficción",
    idioma: "Francés",
    precio: "30.00 EUR",
    formato: "Físico",
    isbn: "978-2-07-011276-7",
    descripcion: "Una monumental novela en siete volúmenes que explora la memoria y la experiencia humana.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1913-11-14",
    editorial: "Grasset",
    paginas: 4215,
    stock: 15
    },
    {
    Image: "../assets/img/El principito.jpg",
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    genero: "Fábula",
    idioma: "Francés",
    precio: "7.99 EUR",
    formato: "Físico",
    isbn: "978-2-07-040850-1",
    descripcion: "Una obra clásica que narra la historia de un joven príncipe que viaja por el universo.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1943-04-06",
    editorial: "Reynal & Hitchcock",
    paginas: 96,
    stock: 15
    },
    {
    Image: "../assets/img/Ulises.jpg",
    titulo: "Ulises",
    autor: "James Joyce",
    genero: "Ficción",
    idioma: "Inglés",
    precio: "15.00 USD",
    formato: "Físico",
    isbn: "978-0-14-118280-3",
    descripcion: "Una novela que sigue las aventuras de Leopold Bloom a lo largo de un solo día en Dublín.",
    estado: "Nuevo",
    ubicacion: "Dublín, Irlanda",
    fecha_publicacion: "1922-02-02",
    editorial: "Shakespeare and Company",
    paginas: 732,
    stock: 15
    },
    {
    Image: "../assets/img/El guardián entre el centeno.jpg",
    titulo: "El guardián entre el centeno",
    autor: "J.D. Salinger",
    genero: "Ficción",
    idioma: "Inglés",
    precio: "10.99 USD",
    formato: "eBook",
    isbn: "978-0-316-76948-0",
    descripcion: "Una novela sobre la adolescencia y la alienación, contada desde la perspectiva de Holden Caulfield.",
    estado: "Nuevo",
    ubicacion: "Nueva York, EE.UU.",
    fecha_publicacion: "1951-07-16",
    editorial: "Little, Brown and Company",
    paginas: 277,
    stock: 15
    },
    {
    Image: "../assets/img/La Odisea.jpg",
    titulo: "La Odisea",
    autor: "Homero",
    genero: "Épica",
    idioma: "Griego",
    precio: "14.99 EUR",
    formato: "Físico",
    isbn: "978-0-14-026886-7",
    descripcion: "Una epopeya clásica que narra las aventuras de Odiseo en su regreso a Ítaca.",
    estado: "Nuevo",
    ubicacion: "Atenas, Grecia",
    fecha_publicacion: "800-01-01",
    editorial: "Penguin Classics",
    paginas: 541,
    stock: 15
    },
    {
    Image: "../assets/img/Los miserables.jpg",
    titulo: "Los miserables",
    autor: "Victor Hugo",
    genero: "Drama",
    idioma: "Francés",
    precio: "18.00 EUR",
    formato: "Físico",
    isbn: "978-2-07-040424-4",
    descripcion: "Una novela que explora las injusticias sociales en la Francia del siglo XIX.",
    estado: "Nuevo",
    ubicacion: "París, Francia",
    fecha_publicacion: "1862-01-01",
    editorial: "A. Lacroix, Verboeckhoven & Cie.",
    paginas: 1463,
    stock: 15
    },
    {
    Image: "../assets/img/Fahrenheit 451.jpg",
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    genero: "Ciencia Ficción",
    idioma: "Inglés",
    precio: "12.99 USD",
    formato: "eBook",
    isbn: "978-0-7432-4722-2",
    descripcion: "Una novela que describe un futuro donde los libros están prohibidos y los bomberos queman cualquier libro encontrado.",
    estado: "Nuevo",
    ubicacion: "Los Ángeles, EE.UU.",
    fecha_publicacion: "1953-10-19",
    editorial: "Ballantine Books",
    paginas: 194,
    stock: 15
    }
    ];

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

function aplicarDescuentoClick() {
    libros.forEach(libro => {
        // Guardar el precio original antes de aplicar el descuento
        if (!libro.precioOriginal) {
          libro.precioOriginal = libro.precio;
        }
  
        let precioActual = parseFloat(libro.precio.split(" ")[0]); // Convertir el precio a un número
        precioActual *= 0.9; // Aplicar descuento del 10%
        libro.precio = `${precioActual.toFixed(2)} EUR`; // Actualizar el precio del libro
    });
  
    listBooks(); // Mostrar los libros actualizados después de aplicar descuento
  }
  
  function restaurarDescuentoClick() {
    libros.forEach(libro => {
        if (libro.precioOriginal) {
          libro.precio = libro.precioOriginal;
          delete libro.precioOriginal; // Eliminar la propiedad precioOriginal una vez restaurado el precio
        }
    });
  
    listBooks(); // Mostrar los libros con los precios restaurados
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

function ordenarPorTitulo() {
    libros.sort((a, b) => {
        // Compara los títulos en minúsculas para evitar problemas de mayúsculas y minúsculas
        const tituloA = a.titulo.toLowerCase();
        const tituloB = b.titulo.toLowerCase();

        if (tituloA < tituloB) {
            return -1;
        }
        if (tituloA > tituloB) {
            return 1;
        }
        return 0;
    });

    listBooks(); // Vuelve a renderizar la lista de libros ordenados
}

function agregarNuevoLibro() {
    const nuevoLibro = {};

    // Recolectar información del nuevo libro utilizando prompt
    nuevoLibro.titulo = prompt('Ingrese el título del libro:');
    nuevoLibro.autor = prompt('Ingrese el autor del libro:');
    nuevoLibro.genero = prompt('Ingrese el género del libro:');
    nuevoLibro.idioma = prompt('Ingrese el idioma del libro:');
    nuevoLibro.precio = prompt('Ingrese el precio del libro:');
    nuevoLibro.formato = prompt('Ingrese el formato del libro:');
    nuevoLibro.isbn = prompt('Ingrese el ISBN del libro:');
    nuevoLibro.descripcion = prompt('Ingrese la descripción del libro:');
    nuevoLibro.estado = prompt('Ingrese el estado del libro (Nuevo/Usado):');
    nuevoLibro.ubicacion = prompt('Ingrese la ubicación del libro:');
    nuevoLibro.fecha_publicacion = prompt('Ingrese la fecha de publicación del libro en formato AAAA-MM-DD:');
    nuevoLibro.editorial = prompt('Ingrese la editorial del libro:');
    nuevoLibro.paginas = parseInt(prompt('Ingrese el número de páginas del libro:'));
    nuevoLibro.stock = parseInt(prompt('Ingrese el stock inicial del libro:'));

    // Capturar la URL de la imagen del libro
    nuevoLibro.imagen = prompt('Ingrese la URL de la imagen del libro:');

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
        nuevoLibro.imagen // Validar que se haya ingresado la URL de la imagen
    ) {
        libros.push(nuevoLibro); // Agregar el nuevo libro al arreglo libros
        listBooks(libros); // Actualizar la lista de libros mostrados (esto es una función hipotética, deberías reemplazarlo con tu lógica de actualización)
        alert('Libro agregado con éxito!');
    } else {
        alert('Por favor, complete todos los campos correctamente, incluyendo la URL de la imagen.');
    }
}


















  