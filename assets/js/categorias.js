import { libros } from './libros.js';

const containerBooks = document.getElementById('lista');
const filterGender = document.getElementById('select-gender').addEventListener('change', filterToGender);
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks);
const btnTopPrices = document.getElementById('btnTopPrices').addEventListener('click', filterTopPrices);
const btnMoreThan200Pages = document.getElementById('btnMoreThan200Pages').addEventListener('click', filterMoreThan200Pages);
const btnPriceRange = document.getElementById('btnPriceRange').addEventListener('click', filterPriceRange);
window.addEventListener('DOMContentLoaded', generateCard);

function generateCard() {  
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

  let autor = document.createElement('h4')
  autor.textContent = libro.autor;

  let priceBook = document.createElement('h3');
  priceBook.textContent = `${libro.precio} $`;

  let btnBuy = document.createElement('button');
  btnBuy.textContent = 'Comprar';

  bookPhoto.appendChild(imgBook);
  
  descriptionBook.appendChild(titleBook);
  descriptionBook.appendChild(autor)
  descriptionBook.appendChild(priceBook);
  descriptionBook.appendChild(btnBuy);
  
  bookCard.appendChild(bookPhoto);
  bookCard.appendChild(descriptionBook);

  containerBooks.appendChild(bookCard);
  return bookCard;
}

function filterToGender(event) {     
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