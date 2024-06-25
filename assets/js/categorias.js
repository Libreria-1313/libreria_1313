import { libros } from './libros.js'; // Importación del array 'libros' desde un archivo externo

// Selección de elementos del DOM y asignación de eventos
const containerBooks = document.getElementById('lista'); // Contenedor donde se mostrarán los libros
const filterToGenero = document.getElementById('select-gender').addEventListener('change', filterToGeneros); // Selector para filtrar por género
const filterToDisponibilidad = document.getElementById('select-disponibles').addEventListener('change', filterToDisponibilidad2); // Selector para filtrar por disponibilidad
const filterToIdioma = document.getElementById('select-lenguaje').addEventListener('change', filterToIdiomas); // Selector para filtrar por idioma
const filterToEditorial = document.getElementById('select-edito').addEventListener('change', filterToEditoriales); // Selector para filtrar por editorial
const filterToAutor = document.getElementById('select-escritor').addEventListener('change', filterToAutores); // Selector para filtrar por autor
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks); // Botón para ordenar los libros alfabéticamente
const btnTopPrices = document.getElementById('btnTopPrices').addEventListener('click', filterTopPrices); // Botón para mostrar los libros más caros
const btnMoreThan200Pages = document.getElementById('btnMoreThan200Pages').addEventListener('click', filterMoreThan200Pages); // Botón para mostrar libros con más de 200 páginas
const btnPriceRange = document.getElementById('btnPriceRange').addEventListener('click', filterPriceRange); // Botón para mostrar libros en un rango de precios
const btnDiscount = document.getElementById('btnDiscount').addEventListener('click', applyDiscount); // Botón para aplicar descuento a los precios de los libros
const btnResetPrices = document.getElementById('btnResetPrices').addEventListener('click', resetPrices); // Botón para restablecer los precios originales de los libros

let originalPrices = []; // Array para almacenar los precios originales de los libros antes de aplicar descuento

// Evento que se dispara cuando el contenido del DOM está completamente cargado
window.addEventListener('DOMContentLoaded', generateCard);

// Función para generar las tarjetas de libros en el contenedor
function generateCard() {  
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  libros.forEach(libro => makeCard(libro)); // Crear una tarjeta para cada libro en el array 'libros'
}

// Función para crear una tarjeta de libro específica
function makeCard(libro) {
  // Crear elementos HTML para la tarjeta del libro
  let bookCard = document.createElement('div');
  bookCard.classList.add('book'); // Agregar clase CSS 'book' al contenedor de la tarjeta

  let bookPhoto = document.createElement('div');
  bookPhoto.classList.add('book-photo'); // Contenedor para la foto del libro

  let imgBook = document.createElement('img');
  imgBook.src = libro.Image; // Asignar la URL de la imagen del libro desde el objeto 'libro'
  imgBook.alt = libro.titulo; // Texto alternativo para la imagen

  let descriptionBook = document.createElement('div');
  descriptionBook.classList.add('book-description'); // Contenedor para la descripción del libro

  let titleBook = document.createElement('h2');
  titleBook.textContent = libro.titulo; // Título del libro

  let autor = document.createElement('h3');
  autor.textContent = libro.autor; // Nombre del autor del libro

  let priceBook = document.createElement('h3');
  priceBook.textContent = `${libro.precio} COP`; // Precio del libro en moneda COP

  let btnBuy = document.createElement('button');
  btnBuy.textContent = 'Comprar'; // Botón para comprar el libro

  // Estructurar los elementos dentro de la tarjeta del libro
  bookPhoto.appendChild(imgBook);
  descriptionBook.appendChild(titleBook);
  descriptionBook.appendChild(autor);
  descriptionBook.appendChild(priceBook);
  descriptionBook.appendChild(btnBuy);
  bookCard.appendChild(bookPhoto);
  bookCard.appendChild(descriptionBook);

  containerBooks.appendChild(bookCard); // Agregar la tarjeta del libro al contenedor principal
  return bookCard; // Retornar la tarjeta del libro creada
}

// Funciones de filtro por diferentes criterios

// Filtrar por género de libro seleccionado en el selector
function filterToGeneros(event) {     
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  if (event.target.value === 'everything') {
    generateCard(); // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.genero === event.target.value) {
        makeCard(libro); // Crear tarjeta para libros que coincidan con el género seleccionado
      } 
    });
  }  
}

// Filtrar por disponibilidad de libro seleccionada en el selector
function filterToDisponibilidad2(event) {     
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  if (event.target.value === 'everything') {
    generateCard(); // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.diponibilidad === event.target.value) {
        makeCard(libro); // Crear tarjeta para libros que coincidan con la disponibilidad seleccionada
      } 
    });
  }  
}

// Filtrar por idioma de libro seleccionado en el selector
function filterToIdiomas(event) {     
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  if (event.target.value === 'everything') {
    generateCard(); // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.idioma === event.target.value) {
        makeCard(libro); // Crear tarjeta para libros que coincidan con el idioma seleccionado
      } 
    });
  }  
}

// Filtrar por editorial de libro seleccionada en el selector
function filterToEditoriales(event) {     
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  if (event.target.value === 'everything') {
    generateCard(); // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.editorial === event.target.value) {
        makeCard(libro); // Crear tarjeta para libros que coincidan con la editorial seleccionada
      } 
    });
  }  
}

// Filtrar por autor de libro seleccionado en el selector
function filterToAutores(event) {     
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  if (event.target.value === 'everything') {
    generateCard(); // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.autor === event.target.value) {
        makeCard(libro); // Crear tarjeta para libros que coincidan con el autor seleccionado
      } 
    });
  }  
}

// Función para ordenar los libros alfabéticamente por título
function sortedBooks() {
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  libros.sort((a, b) => {
    let titleA = a.titulo.toLowerCase();
    let titleB = b.titulo.toLowerCase();
    
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  generateCard(); // Generar las tarjetas con el nuevo orden de libros
}

// Función para mostrar los 5 libros con precios más altos
function filterTopPrices() {
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  const topPricedBooks = [...libros].sort((a, b) => b.precio - a.precio).slice(0, 5); // Ordenar y seleccionar los 5 libros más caros
  topPricedBooks.forEach(libro => makeCard(libro)); // Crear tarjetas para los libros seleccionados
}

// Función para mostrar libros con más de 200 páginas
function filterMoreThan200Pages() {
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  const booksMoreThan200Pages = libros.filter(libro => libro.paginas > 200); // Filtrar libros con más de 200 páginas
  booksMoreThan200Pages.forEach(libro => makeCard(libro)); // Crear tarjetas para los libros seleccionados
}

// Función para mostrar libros en un rango de precios específico
function filterPriceRange() {
  containerBooks.innerHTML = ''; // Limpiar tarjetas previas
  const booksInRange = libros.filter(libro => libro.precio >= 30000 && libro.precio <= 80000); // Filtrar libros por rango de precio
  booksInRange.forEach(libro => makeCard(libro)); // Crear tarjetas para los libros seleccionados
}

// Función para aplicar un descuento del 10% a los precios de los libros
function applyDiscount() {
  if (originalPrices.length === 0) {
    originalPrices = libros.map(libro => libro.precio); // Almacenar los precios originales antes de aplicar descuento
  }
  libros.forEach(libro => {
    libro.precio = (libro.precio * 0.9).toFixed(2); // Aplicar descuento del 10% a cada precio
  });
  generateCard(); // Generar las tarjetas actualizadas con los precios descontados
}

// Función para restablecer los precios originales de los libros
function resetPrices() {
  if (originalPrices.length > 0) {
    libros.forEach((libro, index) => {
      libro.precio = originalPrices[index]; // Restaurar los precios originales de los libros
    });
    originalPrices = []; // Vaciar el array de precios originales
    generateCard(); // Generar las tarjetas actualizadas con los precios restaurados
  }
}
