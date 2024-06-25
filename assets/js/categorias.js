import { libros } from './libros.js';

const containerBooks = document.getElementById('lista');
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

let originalPrices = [];

window.addEventListener('DOMContentLoaded', generateCard);

function generateCard() {  
  containerBooks.innerHTML = '';  // Clear previous cards
  libros.forEach(libro => makeCard(libro));
}

function makeCard(libro) {
  // Crear elementos de la card
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

function filterToGeneros(event) {     
  containerBooks.innerHTML = '';
  if (event.target.value === 'everything') {
    generateCard();
  } else {
    libros.forEach(libro => {
      if (libro.genero === event.target.value) {
        makeCard(libro);
      } 
    });
  }  
}

function filterToDisponibilidad2(event) {     
  containerBooks.innerHTML = '';
  if (event.target.value === 'everything') {
    generateCard();
  } else {
    libros.forEach(libro => {
      if (libro.diponibilidad === event.target.value) {
        makeCard(libro);
      } 
    });
  }  
}

function filterToIdiomas(event) {     
  containerBooks.innerHTML = '';
  if (event.target.value === 'everything') {
    generateCard();
  } else {
    libros.forEach(libro => {
      if (libro.idioma === event.target.value) {
        makeCard(libro);
      } 
    });
  }  
}

function filterToEditoriales(event) {     
  containerBooks.innerHTML = '';
  if (event.target.value === 'everything') {
    generateCard();
  } else {
    libros.forEach(libro => {
      if (libro.editorial === event.target.value) {
        makeCard(libro);
      } 
    });
  }  
}

function filterToAutores(event) {     
  containerBooks.innerHTML = '';
  if (event.target.value === 'everything') {
    generateCard();
  } else {
    libros.forEach(libro => {
      if (libro.autor === event.target.value) {
        makeCard(libro);
      } 
    });
  }  
}


function sortedBooks() {
  containerBooks.innerHTML = '';
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
  generateCard();
  return libros;
}

function filterTopPrices() {
  containerBooks.innerHTML = '';
  const topPricedBooks = [...libros].sort((a, b) => b.precio - a.precio).slice(0, 5);
  topPricedBooks.forEach(libro => makeCard(libro));
}

function filterMoreThan200Pages() {
  containerBooks.innerHTML = '';
  const booksMoreThan200Pages = libros.filter(libro => libro.paginas > 200);
  booksMoreThan200Pages.forEach(libro => makeCard(libro));
}

function filterPriceRange() {
  containerBooks.innerHTML = '';
  const booksInRange = libros.filter(libro => libro.precio >= 30000 && libro.precio <= 80000);
  booksInRange.forEach(libro => makeCard(libro));
}

function applyDiscount() {
  if (originalPrices.length === 0) {
    originalPrices = libros.map(libro => libro.precio);
  }
  libros.forEach(libro => {
    libro.precio = (libro.precio * 0.9).toFixed(2);
  });
  generateCard();
}

function resetPrices() {
  if (originalPrices.length > 0) {
    libros.forEach((libro, index) => {
      libro.precio = originalPrices[index];
    });
    originalPrices = [];
    generateCard();
  }
}
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

