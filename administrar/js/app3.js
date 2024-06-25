 const libros = [
    {
        Image: "../assets/imagenes/img1.jpeg",
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: "71362",
        formato: "Físico",
        isbn: "978-3-16-148410-0",
        descripcion: "Una de las obras más importantes de la literatura hispanoamericana.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1967-06-05",
        editorial: "Editorial Sudamericana",
        paginas: 471,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/El nombre de la rosa.jpg",
        titulo: "El nombre de la rosa",
        autor: "Umberto Eco",
        genero: "Misterio",
        idioma: "Italiano",
        precio: "55786",
        formato: "Físico",
        isbn: "978-84-339-1162-4",
        descripcion: "Una novela histórica y de misterio ambientada en una abadía italiana medieval.",
        estado: "Usado",
        ubicacion: "Roma, Italia",
        fecha_publicacion: "1980-01-01",
        editorial: "Bompiani",
        paginas: 592,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/Sapiens De animales a dioses_.jpg",
        titulo: "Sapiens: De animales a dioses",
        autor: "Yuval Noah Harari",
        genero: "Investigación",
        idioma: "Español",
        precio: "89258",
        formato: "Físico",
        isbn: "978-84-9992-443-6",
        descripcion: "Una breve historia de la humanidad, desde la prehistoria hasta la era moderna.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2011-01-01",
        editorial: "Debate",
        paginas: 496,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/La sombra del viento.jpg",
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Novela",
        idioma: "Español",
        precio: "66899",
        formato: "eBook",
        isbn: "978-84-322-1084-2",
        descripcion: "Un misterio literario ambientado en la Barcelona de mediados del siglo XX.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2001-01-01",
        editorial: "Planeta",
        paginas: 576,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/El alquimista.jpg",
        titulo: "El alquimista",
        autor: "Paulo Coelho",
        genero: "Ficción",
        idioma: "Portugues",
        precio: "62436",
        formato: "Físico",
        isbn: "978-0-06-112241-5",
        descripcion: "Una novela sobre el viaje de un joven pastor en busca de su destino.",
        estado: "Nuevo",
        ubicacion: "Lisboa, Portugal",
        fecha_publicacion: "1988-01-01",
        editorial: "HarperOne",
        paginas: 208,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/Orgullo y prejuicio.jpg",
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Ingles",
        precio: "41602",
        formato: "eBook",
        isbn: "978-0-19-953556-9",
        descripcion: "Una novela clásica que explora las dificultades del amor y las relaciones en la sociedad del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1813-01-28",
        editorial: "T. Egerton",
        paginas: 279,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/Don Quijote de la Mancha.jpg",
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Aventura",
        idioma: "Español",
        precio: "84742",
        formato: "Físico",
        isbn: "978-84-376-0494-7",
        descripcion: "Una de las obras más influyentes de la literatura occidental, que narra las aventuras de un caballero y su escudero.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1605-01-16",
        editorial: "Francisco de Robles",
        paginas: 863,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/Crimen y castigo.jpg",
        titulo: "Crimen y castigo",
        autor: "Fiódor Dostoyevski",
        genero: "Drama",
        idioma: "Ruso",
        precio: "79082",
        formato: "eBook",
        isbn: "978-0-14-305814-4",
        descripcion: "Una novela que explora los dilemas morales de un joven estudiante en San Petersburgo.",
        estado: "Nuevo",
        ubicacion: "San Petersburgo, Rusia",
        fecha_publicacion: "1866-01-01",
        editorial: "The Russian Messenger",
        paginas: 671,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/El gran Gatsby.jpg",
        titulo: "El gran Gatsby",
        autor: "F. Scott Fitzgerald",
        genero: "Novela",
        idioma: "Ingles",
        precio: "45767",
        formato: "Físico",
        isbn: "978-0-7432-7356-5",
        descripcion: "Una novela que retrata la vida de la alta sociedad estadounidense en los años 20.",
        estado: "Nuevo",
        ubicacion: "Nueva York, EE.UU.",
        fecha_publicacion: "1925-04-10",
        editorial: "Charles Scribner's Sons",
        paginas: 180,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/Matar a un ruiseñor.jpg",
        titulo: "Matar a un ruiseñor",
        autor: "Harper Lee",
        genero: "Ficción",
        idioma: "Ingles",
        precio: "54096",
        formato: "eBook",
        isbn: "978-0-06-112008-4",
        descripcion: "Una novela que aborda temas de raza y justicia en el sur de Estados Unidos.",
        estado: "Nuevo",
        ubicacion: "Monroeville, EE.UU.",
        fecha_publicacion: "1960-07-11",
        editorial: "J.B. Lippincott & Co.",
        paginas: 324,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/El señor de los anillos.jpg",
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        idioma: "Ingles",
        precio: "104111",
        formato: "Físico",
        isbn: "978-0-618-00222-8",
        descripcion: "Una épica trilogía que sigue las aventuras de Frodo Bolsón y la comunidad del anillo.",
        estado: "Nuevo",
        ubicacion: "Oxford, Reino Unido",
        fecha_publicacion: "1954-07-29",
        editorial: "Allen & Unwin",
        paginas: 1216,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/Cumbres borrascosas.jpg",
        titulo: "Cumbres borrascosas",
        autor: "Emily Brontë",
        genero: "Romance",
        idioma: "Ingles",
        precio: "37438",
        formato: "eBook",
        isbn: "978-0-14-143955-6",
        descripcion: "Una novela clásica que narra una intensa historia de amor y venganza en los páramos de Yorkshire.",
        estado: "Nuevo",
        ubicacion: "Yorkshire, Reino Unido",
        fecha_publicacion: "1847-12-01",
        editorial: "Thomas Cautley Newby",
        paginas: 416,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/El retrato de Dorian Gray.jpg",
        titulo: "El retrato de Dorian Gray",
        autor: "Oscar Wilde",
        genero: "Ficción",
        idioma: "Ingles",
        precio: "39562",
        formato: "Físico",
        isbn: "978-0-14-143957-0",
        descripcion: "Una novela que explora la decadencia moral de un joven que desea mantenerse eternamente joven.",
        estado: "Usado",
        ubicacion: "Dublín, Irlanda",
        fecha_publicacion: "1890-06-20",
        editorial: "Lippincott's Monthly Magazine",
        paginas: 254,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/La metamorfosis.jpg",
        titulo: "La metamorfosis",
        autor: "Franz Kafka",
        genero: "Ficción",
        idioma: "Aleman",
        precio: "29109",
        formato: "eBook",
        isbn: "978-3-596-90357-5",
        descripcion: "Una novela corta que narra la transformación de un hombre en un insecto gigante.",
        estado: "Nuevo",
        ubicacion: "Praga, República Checa",
        fecha_publicacion: "1915-01-01",
        editorial: "Kurt Wolff Verlag",
        paginas: 96,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/En busca del tiempo perdido.jpg",
        titulo: "En busca del tiempo perdido",
        autor: "Marcel Proust",
        genero: "Ficción",
        idioma: "Frances",
        precio: "133873",
        formato: "Físico",
        isbn: "978-2-07-011276-7",
        descripcion: "Una monumental novela en siete volúmenes que explora la memoria y la experiencia humana.",
        estado: "Nuevo",
        ubicacion: "París, Francia",
        fecha_publicacion: "1913-11-14",
        editorial: "Grasset",
        paginas: 4215,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/El principito.jpg",
        titulo: "El principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fábula",
        idioma: "Frances",
        precio: "35654",
        formato: "Físico",
        isbn: "978-2-07-040850-1",
        descripcion: "Una obra clásica que narra la historia de un joven príncipe que viaja por el universo.",
        estado: "Nuevo",
        ubicacion: "París, Francia",
        fecha_publicacion: "1943-04-06",
        editorial: "Reynal & Hitchcock",
        paginas: 96,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/Ulises.jpg",
        titulo: "Ulises",
        autor: "Antoine de Saint-Exupéry",
        genero: "Ficción",
        idioma: "Ingles",
        precio: "66589",
        formato: "Físico",
        isbn: "978-0-14-118280-3",
        descripcion: "Una novela que sigue las aventuras de Leopold Bloom a lo largo de un solo día en Dublín.",
        estado: "Nuevo",
        ubicacion: "Dublín, Irlanda",
        fecha_publicacion: "1922-02-02",
        editorial: "Shakespeare and Company",
        paginas: 732,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/El guardián entre el centeno.jpg",
        titulo: "El guardián entre el centeno",
        autor: "J.D. Salinger",
        genero: "Ficción",
        idioma: "Ingles",
        precio: "45767",
        formato: "eBook",
        isbn: "978-0-316-76948-0",
        descripcion: "Una novela sobre la adolescencia y la alienación, contada desde la perspectiva de Holden Caulfield.",
        estado: "Nuevo",
        ubicacion: "Nueva York, EE.UU.",
        fecha_publicacion: "1951-07-16",
        editorial: "Little, Brown and Company",
        paginas: 277,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/La Odisea.jpg",
        titulo: "La Odisea",
        autor: "Homero",
        genero: "Épica",
        idioma: "Griego",
        precio: "66897",
        formato: "Físico",
        isbn: "978-0-14-026886-7",
        descripcion: "Una epopeya clásica que narra las aventuras de Odiseo en su regreso a Ítaca.",
        estado: "Nuevo",
        ubicacion: "Atenas, Grecia",
        fecha_publicacion: "800-01-01",
        editorial: "Penguin Classics",
        paginas: 541,
        stock:15,
        diponibilidad:"no disponible"
        },
        {
        Image: "../assets/imagenes/Los miserables.jpg",
        titulo: "Los miserables",
        autor: "Victor Hugo",
        genero: "Drama",
        idioma: "Frances",
        precio: "84749",
        formato: "Físico",
        isbn: "978-2-07-040424-4",
        descripcion: "Una novela que explora las injusticias sociales en la Francia del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "París, Francia",
        fecha_publicacion: "1862-01-01",
        editorial: "A. Lacroix, Verboeckhoven & Cie.",
        paginas: 1463,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/Fahrenheit 451.jpg",
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        genero: "Ciencia Ficción",
        idioma: "Ingles",
        precio: "54096",
        formato: "eBook",
        isbn: "978-0-7432-4722-2",
        descripcion: "Una novela que describe un futuro donde los libros están prohibidos y los bomberos queman cualquier libro encontrado.",
        estado: "Nuevo",
        ubicacion: "Los Ángeles, EE.UU.",
        fecha_publicacion: "1953-10-19",
        editorial: "Ballantine Books",
        paginas: 194,
        stock:15,
        diponibilidad:"si disponible"
        },
        {
        Image: "../assets/imagenes/El amor en los tiempos del cólera.jpeg",
        titulo: "El amor en los tiempos del cólera",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: "71362",
        formato: "Físico",
        isbn: "978-0-307-47455-1",
        descripcion: "Una historia de amor que trasciende el tiempo y las circunstancias.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1985-03-06",
        editorial: "Editorial Sudamericana",
        paginas: 368,
        stock: 15,
        disponibilidad: "no disponible"
    },
    {
        Image: "../assets/imagenes/Crónica de una muerte anunciada.jpeg",
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        idioma: "Español",
        precio: "45999",
        formato: "Físico",
        isbn: "978-0-307-38887-2",
        descripcion: "La trágica historia de un asesinato anunciado y su impacto en un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Bogotá, Colombia",
        fecha_publicacion: "1981-01-01",
        editorial: "Editorial Sudamericana",
        paginas: 122,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Baudolino.jpeg",
        titulo: "Baudolino",
        autor: "Umberto Eco",
        genero: "Ficción histórica",
        idioma: "Italiano",
        precio: "55786",
        formato: "Físico",
        isbn: "978-0-15-100690-8",
        descripcion: "Una mezcla de historia y ficción en la Edad Media, narrada por el protagonista Baudolino.",
        estado: "Usado",
        ubicacion: "Roma, Italia",
        fecha_publicacion: "2000-01-01",
        editorial: "Bompiani",
        paginas: 521,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/La misteriosa llama de la Reina Loana.jpeg",
        titulo: "La misteriosa llama de la Reina Loana",
        autor: "Umberto Eco",
        genero: "Ficción",
        idioma: "Italiano",
        precio: "67890",
        formato: "Físico",
        isbn: "978-0-15-101140-7",
        descripcion: "La historia de un hombre que pierde la memoria y trata de reconstruir su pasado a través de libros y recuerdos.",
        estado: "Nuevo",
        ubicacion: "Milán, Italia",
        fecha_publicacion: "2004-10-15",
        editorial: "Bompiani",
        paginas: 480,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/21 lecciones para el siglo XXI.jpeg",
        titulo: "21 lecciones para el siglo XXI",
        autor: "Yuval Noah Harari",
        genero: "Investigación",
        idioma: "Español",
        precio: "89258",
        formato: "Físico",
        isbn: "978-84-9992-898-4",
        descripcion: "Un análisis de los desafíos y oportunidades que enfrenta la humanidad en el siglo XXI.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2018-01-01",
        editorial: "Debate",
        paginas: 368,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Una breve historia de la humanidad.jpeg",
        titulo: "Una breve historia de la humanidad",
        autor: "Yuval Noah Harari",
        genero: "Investigación",
        idioma: "Español",
        precio: "91234",
        formato: "Físico",
        isbn: "978-84-9992-591-4",
        descripcion: "Una revisión de la historia de la humanidad desde una perspectiva innovadora y accesible.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2013-10-15",
        editorial: "Debate",
        paginas: 512,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/El prisionero del cielo.jpeg",
        titulo: "El prisionero del cielo",
        autor: "Carlos Ruiz Zafón",
        genero: "Novela",
        idioma: "Español",
        precio: "66899",
        formato: "eBook",
        isbn: "978-84-08-10548-3",
        descripcion: "Una continuación de 'La sombra del viento' que conecta con los personajes de la saga.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2011-01-01",
        editorial: "Planeta",
        paginas: 384,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/El laberinto de los espíritus.jpeg",
        titulo: "El laberinto de los espíritus",
        autor: "Carlos Ruiz Zafón",
        genero: "Novela",
        idioma: "Español",
        precio: "70234",
        formato: "eBook",
        isbn: "978-84-08-15634-8",
        descripcion: "La conclusión de la saga iniciada con 'La sombra del viento', llena de misterio y aventuras.",
        estado: "Nuevo",
        ubicacion: "Barcelona, España",
        fecha_publicacion: "2016-11-17",
        editorial: "Planeta",
        paginas: 925,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Veronika decide morir.jpeg",
        titulo: "Veronika decide morir",
        autor: "Paulo Coelho",
        genero: "Ficción",
        idioma: "Portugués",
        precio: "62436",
        formato: "Físico",
        isbn: "978-0-06-112426-2",
        descripcion: "La historia de una joven que decide acabar con su vida y descubre un nuevo sentido de vivir.",
        estado: "Nuevo",
        ubicacion: "Lisboa, Portugal",
        fecha_publicacion: "1998-01-01",
        editorial: "HarperOne",
        paginas: 224,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/El zahir.jpeg",
        titulo: "El zahir",
        autor: "Paulo Coelho",
        genero: "Ficción",
        idioma: "Portugués",
        precio: "65432",
        formato: "Físico",
        isbn: "978-0-06-087587-5",
        descripcion: "Un escritor busca a su esposa desaparecida, explorando el significado del amor y la obsesión.",
        estado: "Nuevo",
        ubicacion: "Lisboa, Portugal",
        fecha_publicacion: "2005-01-01",
        editorial: "HarperOne",
        paginas: 336,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Mansfield Park.jpeg",
        titulo: "Mansfield Park",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Inglés",
        precio: "41602",
        formato: "eBook",
        isbn: "978-0-19-953553-8",
        descripcion: "Una joven pobre es criada por sus ricos tíos y enfrenta las complejidades de la vida en Mansfield Park.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1814-07-09",
        editorial: "T. Egerton",
        paginas: 473,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Emma.jpeg",
        titulo: "Emma",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Inglés",
        precio: "45678",
        formato: "eBook",
        isbn: "978-0-19-953554-5",
        descripcion: "Una joven rica y soltera se dedica a hacer de casamentera en su pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Londres, Reino Unido",
        fecha_publicacion: "1815-12-23",
        editorial: "T. Egerton",
        paginas: 474,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/Las novelas ejemplares.jpeg",
        titulo: "Las novelas ejemplares",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: "84742",
        formato: "Físico",
        isbn: "978-84-376-0494-7",
        descripcion: "Una colección de doce novelas cortas que abordan diversos aspectos de la vida y la sociedad del Siglo de Oro español.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1613-01-01",
        editorial: "Real Academia Española",
        paginas: 488,
        stock: 15,
        disponibilidad: "si disponible"
    },
    {
        Image: "../assets/imagenes/La Galatea.jpeg",
        titulo: "La Galatea",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        idioma: "Español",
        precio: "75642",
        formato: "Físico",
        isbn: "978-84-376-0495-4",
        descripcion: "Una novela pastoril que combina elementos de romance y aventuras en un paisaje idealizado.",
        estado: "Nuevo",
        ubicacion: "Madrid, España",
        fecha_publicacion: "1585-01-01",
        editorial: "Real Academia Española",
        paginas: 520,
        stock: 15,
        disponibilidad: "si disponible"
    }
    
    ];

        // Obtener el contenedor de libros y el elemento de selección de libros del DOM
        const divbooks = document.getElementById('divbooks');
        const libroSelect = document.getElementById('libro-select');

        // Cargar los libros cuando se carga la página
        loadBooks();

        // Función para listar todos los libros en el contenedor y en el selector
        function listBooks() {
            divbooks.innerHTML = ''; // Limpiar el contenido anterior del contenedor de libros

            libros.forEach(book => {
                createBook(book); // Llamar a createBook para cada libro para mostrarlo en el contenedor
                addBookOption(book); // Agregar opción del libro al selector
            });
        }

        // Función para cargar todos los libros al iniciar la página
        function loadBooks() {
            divbooks.innerHTML = ''; // Limpiar el contenido anterior del contenedor de libros

            libros.forEach((book, index) => {
                createBook(book); // Llamar a createBook para cada libro para mostrarlo en el contenedor
                addBookOption(book); // Agregar opción del libro al selector
            });

            // Opcionalmente, mostrar los detalles del primer libro por defecto si hay libros disponibles
            if (libros.length > 0) {
                showBookDetails(libros[0].titulo); // Mostrar los detalles del primer libro por defecto
            }
        }

        // Función para crear la estructura de cada libro y añadirlo al contenedor
        function createBook(book) {
            const myBook = document.createElement('div');
            myBook.classList.add('book'); // Asignar clase 'book' al div del libro

            const title = document.createElement('h2');
            title.textContent = book.titulo; // Asignar el título del libro

            const image = document.createElement('img');
            image.src = book.Image; // Asignar la URL de la imagen desde el objeto book
            image.alt = book.titulo; // Agregar un atributo alt para accesibilidad

            const autor = document.createElement('p');
            autor.textContent = `Autor: ${book.autor}`; // Asignar el autor del libro

            const genero = document.createElement('p');
            genero.textContent = `Género: ${book.genero}`; // Asignar el género del libro

            const idioma = document.createElement('p');
            idioma.textContent = `Idioma: ${book.idioma}`; // Asignar el idioma del libro

            const precio = document.createElement('p');
            precio.textContent = `Precio: ${book.precio}`; // Asignar el precio del libro

            const formato = document.createElement('p');
            formato.textContent = `Formato: ${book.formato}`; // Asignar el formato del libro

            const isbn = document.createElement('p');
            isbn.textContent = `ISBN: ${book.isbn}`; // Asignar el ISBN del libro

            const descripcion = document.createElement('p');
            descripcion.textContent = `Descripción: ${book.descripcion}`; // Asignar la descripción del libro

            const estado = document.createElement('p');
            estado.textContent = `Estado: ${book.estado}`; // Asignar el estado del libro

            const ubicacion = document.createElement('p');
            ubicacion.textContent = `Ubicación: ${book.ubicacion}`; // Asignar la ubicación del libro

            const fecha = document.createElement('p');
            fecha.textContent = `Fecha de publicación: ${book.fecha_publicacion}`; // Asignar la fecha de publicación del libro

            const editorial = document.createElement('p');
            editorial.textContent = `Editorial: ${book.editorial}`; // Asignar la editorial del libro

            const paginas = document.createElement('p');
            paginas.textContent = `Páginas: ${book.paginas}`; // Asignar el número de páginas del libro

            const stock = document.createElement('p');
            stock.textContent = `Stock: ${book.stock}`; // Asignar el stock del libro

            const stockContainer = document.createElement('div'); // Crear contenedor para el stock

            const stockLabel = document.createElement('label');
            stockLabel.textContent = 'Stock: '; // Etiqueta del stock

            const stockValue = document.createElement('span');
            stockValue.textContent = book.stock; // Valor del stock

            const increaseStockButton = document.createElement('button');
            increaseStockButton.textContent = '+';
            increaseStockButton.addEventListener('click', () => increaseStock(book)); // Evento para incrementar el stock

            const decreaseStockButton = document.createElement('button');
            decreaseStockButton.textContent = '-';
            decreaseStockButton.addEventListener('click', () => decreaseStock(book)); // Evento para decrementar el stock

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
            // Añadir el contenedor del stock al libro
            myBook.appendChild(stockContainer);

            // Añadir el libro al contenedor principal
            divbooks.appendChild(myBook);
        }

        // Función para buscar y eliminar un libro basado en criterios
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
                    libros.splice(i, 1); // Eliminar el libro del arreglo libros
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

        // Función para incrementar el stock de un libro
        function increaseStock(book) {
            book.stock++; // Incrementa el stock del libro seleccionado
            listBooks(); // Vuelve a renderizar la lista de libros para mostrar el cambio
        }

        // Función para decrementar el stock de un libro
        function decreaseStock(book) {
            if (book.stock > 0) {
                book.stock--; // Decrementa el stock del libro seleccionado solo si es mayor que cero
                listBooks(); // Vuelve a renderizar la lista de libros para mostrar el cambio
            } else {
                alert('El stock ya está en cero.'); // Avisa al usuario si el stock es cero y no se puede decrementar más
            }
        }

        // Función para agregar una opción de libro al selector
        function addBookOption(book) {
            const option = document.createElement('option');
            option.value = book.titulo; // El valor del option será el título del libro
            option.textContent = book.titulo; // El texto visible será también el título

            libroSelect.appendChild(option);
        }

        // Evento para mostrar los detalles del libro seleccionado cuando cambia el selector
        libroSelect.addEventListener('change', (event) => {
            const selectedBookTitle = event.target.value;
            showBookDetails(selectedBookTitle);
        });

        // Función para mostrar los detalles del libro seleccionado
        function showBookDetails(selectedBookTitle) {
            const selectedBook = libros.find(book => book.titulo === selectedBookTitle);

            // Mostrar detalles del libro seleccionado en algún elemento del DOM (por ejemplo, en un div con id "book-details")
            const bookDetails = document.getElementById('book-details');
            bookDetails.innerHTML = ""; // Limpiar contenido anterior

            const title = document.createElement('h2');
            title.textContent = selectedBook.titulo; // Asignar el título del libro seleccionado

            const image = document.createElement('img');
            image.src = selectedBook.Image; // Asignar la URL de la imagen del libro seleccionado
            image.alt = selectedBook.titulo; // Asignar el atributo alt de la imagen

            const author = document.createElement('p');
            author.textContent = `Autor: ${selectedBook.autor}`; // Asignar el autor del libro seleccionado

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
                selectedBook.editorial = nuevaEditorial; // Asignar la nueva editorial al libro seleccionado
                alert(`La editorial ha sido cambiada a: "${nuevaEditorial}" para el libro seleccionado`);
                listBooks(); // Actualizar la lista de libros mostrados
                } else {
                alert('Por favor, selecciona un libro');
                }
                }


        // Función para agregar un nuevo libro al arreglo de libros
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
            listBooks(); // Actualizar la lista de libros mostrados
            alert('Libro agregado con éxito!');
        } else {
            alert('Por favor, complete todos los campos correctamente, incluyendo la URL de la imagen.');
        }
    }

   




















  