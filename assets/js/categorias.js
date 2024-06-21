import { libros } from './libros.js';

const containerBooks = document.getElementById('lista');
const filterGender = document.getElementById('select-gender');
const btnSort = document.getElementById('btnSort');
const estante2 = document.getElementById('estanteriaCostos');
const numeropaginas = document.getElementById('numerodepaginas')


filterGender.addEventListener('change', filterToGender);
btnSort.addEventListener('click', sortedBooks);


window.addEventListener('DOMContentLoaded', () => {
    generateCard();
    mostrarCincoMasCostosos();
    masDe200Paginas();
});

function generateCard() {  
  libros.forEach(libro => makeCard(libro));
}

function makeCard(libros) {
  // Crear elementos de la card
  let bookCard = document.createElement('div');
  bookCard.classList.add('book');

  let bookPhoto = document.createElement('div');
  bookPhoto.classList.add('book-photo');

  let imgBook = document.createElement('img');
  imgBook.src = libros.image;
  imgBook.alt = libros.titulo;

  let descriptionBook = document.createElement('div');
  descriptionBook.classList.add('book-description');

  let titleBook = document.createElement('h2');
  titleBook.textContent = libros.titulo;

  let priceBook = document.createElement('h3');
  priceBook.textContent = `${libros.precio} COP`;

  let btnBuy = document.createElement('button');
  btnBuy.textContent = 'Comprar';

  bookPhoto.appendChild(imgBook);
  
  descriptionBook.appendChild(titleBook);
  descriptionBook.appendChild(priceBook);
  descriptionBook.appendChild(btnBuy);
  
  bookCard.appendChild(bookPhoto);
  bookCard.appendChild(descriptionBook);

  containerBooks.appendChild(bookCard);
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
}


function mostrarCincoMasCostosos() {
  const cincoMasCostosos = libros
    .sort((a, b) => b.precio - a.precio)
    .slice(0, 5);

  const containerCostosos = document.createElement('div');
  containerCostosos.classList.add('top-five-costosos');
  
  cincoMasCostosos.forEach(libro => {
    let expensiveBookCard = document.createElement('div');
    expensiveBookCard.classList.add('costosos');

    let bookPhoto = document.createElement('div');
    bookPhoto.classList.add('book-photo');

    let imgBook = document.createElement('img');
    imgBook.src = libro.image;
    imgBook.alt = libro.titulo;

    let descriptionBook = document.createElement('div');
    descriptionBook.classList.add('book-description');

    let titleBook = document.createElement('h2');
    titleBook.textContent = libro.titulo;

    let priceBook = document.createElement('h3');
    priceBook.textContent = `${libro.precio} COP`;

    let btnBuy = document.createElement('button');
    btnBuy.textContent = 'Comprar';

    bookPhoto.appendChild(imgBook);
    descriptionBook.appendChild(titleBook);
    descriptionBook.appendChild(priceBook);
    descriptionBook.appendChild(btnBuy);
    
    expensiveBookCard.appendChild(bookPhoto);
    expensiveBookCard.appendChild(descriptionBook);

    containerCostosos.appendChild(expensiveBookCard);
  });

  // Añadir el contenedor de libros más costosos a la sección del HTML específica
  const estanteriaCostosos = document.getElementById('estanteriaCostos');
  estanteriaCostosos.appendChild(containerCostosos);
}

function masDe200Paginas() {
  const paginas = libros.filter(libro => libro.paginas > 200);

  const containerPaginas = document.createElement('div');
  containerPaginas.classList.add('paginas-mayor-a-200');
  
  paginas.forEach(libros => {
    let paginaBookCard = document.createElement('div');
    paginaBookCard.classList.add('book');

    let bookPhoto = document.createElement('div');
    bookPhoto.classList.add('book-photo');

    let imgBook = document.createElement('img');
    imgBook.src = libros.image;
    imgBook.alt = libros.titulo;

    let descriptionBook = document.createElement('div');
    descriptionBook.classList.add('book-description');

    let titleBook = document.createElement('h2');
    titleBook.textContent = libros.titulo;

    let priceBook = document.createElement('h3');
    priceBook.textContent = `${libros.precio} COP`;

    let autorBook = document.createElement('h3');
    autorBook.textContent = `${libros.autor} `;

    bookPhoto.appendChild(imgBook);
    descriptionBook.appendChild(titleBook);
    descriptionBook.appendChild(autorBook);
    descriptionBook.appendChild(priceBook);
    
    paginaBookCard.appendChild(bookPhoto);
    paginaBookCard.appendChild(descriptionBook);

    containerPaginas.appendChild(paginaBookCard);
  });

  const librosMasDe200Paginas = document.getElementById('librosMasDe200Paginas');
  librosMasDe200Paginas.innerHTML = '';
  librosMasDe200Paginas.appendChild(containerPaginas);
}

