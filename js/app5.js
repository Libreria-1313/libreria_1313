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


function loadBooks() {
    const bookSelectStock = document.getElementById('bookSelectStock');
    bookSelectStock.innerHTML = ''; // Limpiar opciones anteriores

    books.forEach((book, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = book.titulo;
        bookSelectStock.appendChild(option);
    });

    // Llamar a la función para mostrar los libros
    showBooks();
}

function showBooks() {
    const divbooks = document.getElementById('divbooks');
    divbooks.innerHTML = '';

    books.forEach(book => {
        const myBook = document.createElement('div');
        myBook.classList.add('book');

        const title = document.createElement('h2');
        title.textContent = book.titulo;

        const image = document.createElement('img');
        image.src = book.Image;
        image.alt = book.titulo;

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

        divbooks.appendChild(myBook);
    });
}

// Función para ajustar el stock de un libro seleccionado
function adjustStock(increase) {
    const bookSelectStock = document.getElementById('bookSelectStock');
    const stockChange = parseInt(document.getElementById('stockChange').value, 10);
    const selectedIndex = bookSelectStock.value;

    if (selectedIndex !== '' && !isNaN(stockChange) && stockChange > 0) {
        if (increase) {
            books[selectedIndex].stock += stockChange;
        } else {
            books[selectedIndex].stock = Math.max(0, books[selectedIndex].stock - stockChange);
        }
        showBooks(); // Actualizar la visualización del stock
        alert('Stock ajustado con éxito');
    } else {
        alert('Por favor, seleccione un libro y complete el campo de cantidad a ajustar.');
    }
}

// Cargar los libros al cargar la página
document.addEventListener('DOMContentLoaded', loadBooks);
