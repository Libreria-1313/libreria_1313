// Importar el array 'libros' desde el módulo './libros.js'
import { libros } from './libros.js';

// Obtener referencia al contenedor de libros en el DOM
const containerBooks = document.getElementById('lista');

// Asignar event listeners a los elementos del DOM y definir funciones para cada evento
const filterToGenero = document.getElementById('select-gender').addEventListener('change', filterToGeneros);
const filterToDisponibilidad = document.getElementById('select-disponibles').addEventListener('change', filterToDisponibilidad2);
const filterToIdioma = document.getElementById('select-lenguaje').addEventListener('change', filterToIdiomas);
const filterToEditorial = document.getElementById('select-edito').addEventListener('change', filterToEditoriales);
const filterToAutor = document.getElementById('select-escritor').addEventListener('change', filterToAutores);
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks);
const btnTopPrices = document.getElementById('btnTopPrices').addEventListener('click', filterTopPrices);
const btnMoreThan200Pages = document.getElementById('btnMoreThan200Pages').addEventListener('click', filterMoreThan200Pages);
const btnPriceRange = document.getElementById('btnPriceRange').addEventListener('click', filterPriceRange);
const btnDiscount = document.getElementById('btnDiscount').addEventListener('click', applyDiscount);
const btnResetPrices = document.getElementById('btnResetPrices').addEventListener('click', resetPrices);

// Array para almacenar los precios originales de los libros
let originalPrices = [];

// Event listener para cargar las tarjetas de libros al cargar la página
window.addEventListener('DOMContentLoaded', generateCard);

// Función para generar las tarjetas de libros
function generateCard() {  
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  libros.forEach(libro => makeCard(libro));  // Crear tarjeta para cada libro
}

// Función para crear una tarjeta de libro
function makeCard(libro) {
  // Crear elementos de la tarjeta
  let bookCard = document.createElement('div');
  bookCard.classList.add('book');

  let bookPhoto = document.createElement('div');
  bookPhoto.classList.add('book-photo');

  let imgBook = document.createElement('img');
  imgBook.src = libro.Image;
  imgBook.alt = libro.titulo;

  let descriptionBook = document.createElement('div');
  descriptionBook.classList.add('book-description');

  let titleBook = document.createElement('h2');
  titleBook.textContent = libro.titulo;

  let autor = document.createElement('h3');
  autor.textContent = libro.autor;

  let priceBook = document.createElement('h3');
  priceBook.textContent = `${libro.precio} COP`;

  let btnBuy = document.createElement('button');
  btnBuy.textContent = 'Solicitar';
  btnBuy.classList.add('btn-buy');
  btnBuy.addEventListener('click', () => {
    window.location.href = '../templates/informacion.html'; // Redirige a la URL del enlace de compra
  });

  // Construir la estructura de la tarjeta
  bookPhoto.appendChild(imgBook);
  descriptionBook.appendChild(titleBook);
  descriptionBook.appendChild(autor);
  descriptionBook.appendChild(priceBook);
  descriptionBook.appendChild(btnBuy);
  bookCard.appendChild(bookPhoto);
  bookCard.appendChild(descriptionBook);
  containerBooks.appendChild(bookCard);

  return bookCard;
}

// Funciones de filtrado por diferentes criterios

// Filtrar libros por género
function filterToGeneros(event) {     
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  if (event.target.value === 'everything') {
    generateCard();  // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.genero === event.target.value) {
        makeCard(libro);  // Mostrar libros que coincidan con el género seleccionado
      } 
    });
  }  
}

// Filtrar libros por disponibilidad
function filterToDisponibilidad2(event) {     
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  if (event.target.value === 'everything') {
    generateCard();  // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.diponibilidad === event.target.value) {
        makeCard(libro);  // Mostrar libros que coincidan con la disponibilidad seleccionada
      } 
    });
  }  
}

// Filtrar libros por idioma
function filterToIdiomas(event) {     
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  if (event.target.value === 'everything') {
    generateCard();  // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.idioma === event.target.value) {
        makeCard(libro);  // Mostrar libros que coincidan con el idioma seleccionado
      } 
    });
  }  
}

// Filtrar libros por editorial
function filterToEditoriales(event) {     
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  if (event.target.value === 'everything') {
    generateCard();  // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.editorial === event.target.value) {
        makeCard(libro);  // Mostrar libros que coincidan con la editorial seleccionada
      } 
    });
  }  
}

// Filtrar libros por autor
function filterToAutores(event) {     
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  if (event.target.value === 'everything') {
    generateCard();  // Mostrar todos los libros si se selecciona 'everything'
  } else {
    libros.forEach(libro => {
      if (libro.autor === event.target.value) {
        makeCard(libro);  // Mostrar libros que coincidan con el autor seleccionado
      } 
    });
  }  
}

// Función para ordenar libros alfabéticamente por título
function sortedBooks() {
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
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
  generateCard();  // Generar las tarjetas actualizadas
}

// Función para filtrar y mostrar los libros con los precios más altos
function filterTopPrices() {
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  const topPricedBooks = [...libros].sort((a, b) => b.precio - a.precio).slice(0, 5);
  topPricedBooks.forEach(libro => makeCard(libro));  // Mostrar los libros con precios más altos
}

// Función para filtrar y mostrar los libros con más de 200 páginas
function filterMoreThan200Pages() {
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  const booksMoreThan200Pages = libros.filter(libro => libro.paginas > 200);
  booksMoreThan200Pages.forEach(libro => makeCard(libro));  // Mostrar libros con más de 200 páginas
}

// Función para filtrar y mostrar los libros dentro de un rango de precios específico
function filterPriceRange() {
  containerBooks.innerHTML = '';  // Limpiar las tarjetas previas
  const booksInRange = libros.filter(libro => libro.precio >= 30000 && libro.precio <= 80000);
  booksInRange.forEach(libro => makeCard(libro));  // Mostrar libros dentro del rango de precios
}

// Función para aplicar un descuento del 10% a los precios de los libros
function applyDiscount() {
  if (originalPrices.length === 0) {
    originalPrices = libros.map(libro => libro.precio);  // Guardar los precios originales
  }
  libros.forEach(libro => {
    libro.precio = (libro.precio * 0.9).toFixed(2);  // Aplicar descuento del 10%
  });
  generateCard();  // Generar las tarjetas actualizadas con los precios descontados
}

// Función para restablecer los precios originales de los libros
function resetPrices() {
  if (originalPrices.length > 0) {
    libros.forEach((libro, index) => {
      libro.precio = originalPrices[index];  // Restablecer los precios originales
    });
    originalPrices = [];  // Limpiar el array de precios originales
    generateCard();  // Generar las tarjetas actualizadas
  }
}

// Event listener para el botón de enviar formulario
document.getElementById('submitButton').addEventListener('click', function() {
  const form = document.getElementById('dataForm');
  const formData = new FormData(form);

  const output = [];
  formData.forEach((value, key) => {
      output.push(`${key}: ${value}`);
  });

  // Mostrar en la consola los datos del formulario
  console.log('Datos del formulario:');
  console.log(output);

  // Si deseas también mostrar los datos en algún elemento HTML
  // Puedes hacerlo de la siguiente manera:
  const titulo = document.getElementById('titulo');
  titulo.innerHTML = `<h2>${formData.get('titulo')}</h2>`;
});
