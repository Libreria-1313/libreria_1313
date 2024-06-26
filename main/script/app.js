const libros = [
    {
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
        paginas: 471
    },
    {
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
        paginas: 592
    },
    {
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
        paginas: 496
    },
    {
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
        paginas: 576
    },
    {
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
        paginas: 208
    },
    {
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
        paginas: 279
    },
    {
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
        paginas: 863
    },
    {
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
        paginas: 671
    },
    {
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
        paginas: 180
    },
    {
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
        paginas: 324
    },
    {
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
        paginas: 1216
    },
    {
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
        paginas: 416
    },
    {
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
        paginas: 254
    },
    {
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
        paginas: 96
    },
    {
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
        paginas: 4215
    },
    {
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
        paginas: 96
    },
    {
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
        paginas: 732
    },
    {
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
        paginas: 277
    },
    {
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
        paginas: 541
    },
    {
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
        paginas: 1463
    },
    {
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
        paginas: 194
    }
];

function mostrarLibros() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    const select = document.getElementById('libro-select');
    select.innerHTML = '<option value="">Selecciona un libro</option>';
    libros.forEach((libro, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <h2>${libro.titulo}</h2>
            <p><strong>Autor:</strong> ${libro.autor}</p>
            <p><strong>Género:</strong> ${libro.genero}</p>
            <p><strong>Idioma:</strong> ${libro.idioma}</p>
            <p><strong>Precio:</strong> ${libro.precio}</p>
            <p><strong>Formato:</strong> ${libro.formato}</p>
            <p><strong>ISBN:</strong> ${libro.isbn}</p>
            <p><strong>Descripción:</strong> ${libro.descripcion}</p>
            <p><strong>Estado:</strong> ${libro.estado}</p>
            <p><strong>Ubicación:</strong> ${libro.ubicacion}</p>
            <p><strong>Fecha de Publicación:</strong> ${libro.fecha_publicacion}</p>
            <p><strong>Editorial:</strong> ${libro.editorial}</p>
            <p><strong>Páginas:</strong> ${libro.paginas}</p>
        `;
        bookList.appendChild(bookDiv);

        const option = document.createElement('option');
        option.value = index;
        option.textContent = libro.titulo;
        select.appendChild(option);
    });
}

function cambiarEditorial() {
    const select = document.getElementById('libro-select');
    const nuevaEditorial = document.getElementById('nueva-editorial-input').value;
    const libroIndex = select.value;
    if (libroIndex !== '') {
        libros[libroIndex].editorial = nuevaEditorial;
        alert(`La editorial ha sido cambiada a: "${nuevaEditorial}" para el libro seleccionado`);
        mostrarLibros();
    } else {
        alert('Por favor, selecciona un libro');
    }
}

mostrarLibros();
document.getElementById('submitButton').addEventListener('click', function() {
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);

    const output = [];
    formData.forEach((value, key) => {
        output.push(`${key}: ${value}`);
    });

    alert(`Datos del formulario:\n${output.join('\n')}`);
});
function cambiarEditorial() {
const select = document.getElementById('libro-select');
const nuevaEditorial = document.getElementById('nueva-editorial-input').value;
const libroIndex = select.value;
if (libroIndex !== '') {
libros[libroIndex].editorial = nuevaEditorial;
alert(`La editorial ha sido cambiada a: "${nuevaEditorial}" para el libro seleccionado`);
mostrarLibros();
} else {
alert('Por favor, selecciona un libro');
}
}