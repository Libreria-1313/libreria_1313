
import { libros } from './libros.js';

const containerBooks = document.getElementById('lista')
const filterGender = document.getElementById('select-gender').addEventListener('change', filterToGender)
const btnSort = document.getElementById('btnSort').addEventListener('click', sortedBooks)

window.addEventListener('DOMContentLoaded', generateCard)

function generateCard() {  
  libros.forEach( libros => makeCard(libros) )
}

function makeCard(libros) {
  // Crear elementos de la card
  let bookCard = document.createElement('div')
  bookCard.classList.add('book')

  let bookPhoto = document.createElement('div')
  bookPhoto.classList.add('book-photo')

  let imgBook = document.createElement('img')
  imgBook.src = libros.image
  imgBook.alt = libros.titulo

  let descriptionBook = document.createElement('div')
  descriptionBook.classList.add('book-description')

  let titleBook = document.createElement('h2')
  titleBook.textContent = libros.titulo

  let priceBook = document.createElement('h3')
  priceBook.textContent = `${libros.precio}$`

  let btnBuy = document.createElement('button')
  btnBuy.textContent = 'Comprar'

  bookPhoto.appendChild(imgBook)
  
  descriptionBook.appendChild(titleBook)
  descriptionBook.appendChild(priceBook)
  descriptionBook.appendChild(btnBuy)
  
  bookCard.appendChild(bookPhoto)
  bookCard.appendChild(descriptionBook)

  containerBooks.appendChild(bookCard)
  return bookCard;
}

function filterToGender (event) {     
  containerBooks.innerHTML = ''
  if (event.target.value === 'everything') {
    generateCard()    
  } else {
    libros.forEach( libros => {
      if (libros.genero === event.target.value ) {
        makeCard(libros)
      }
    })
  }  
}

function sortedBooks() {
  containerBooks.innerHTML = ''
  // Usamos sort() con una función de comparación
  libros.sort((a, b) => {
    // Comparamos los títulos de los libros, en minúsculas para ser case-insensitive
    let titleA = a.titulo.toLowerCase();
    let titleB = b.titulo.toLowerCase();
    
    if (titleA < titleB) {
      return -1; // a debe venir antes que b
    }
    if (titleA > titleB) {
      return 1; // b debe venir antes que a
    }
    return 0; // son iguales
  });
  generateCard()
  return libros; // Devolvemos el array de libros ordenado
}




const estante2 = document.getElementById('estanteriaCostos');
const botonLibros = document.getElementById('botonestanteria');
botonLibros.addEventListener('click', booksPreciosos);

window.addEventListener('DOMContentLoaded', cargarEstante);

function cargarEstante() {
  libros.forEach(libro => mostrarLibroCostoso(libro));
}

function mostrarLibroCostoso(libro) {
  if (libro.precio > 100) {
    let expensiveBooks1 = document.createElement('div');
    expensiveBooks1.classList.add('costosos');

    let imagenLibro = document.createElement('div');
    imagenLibro.classList.add('libro-imagen');

    let imgBook = document.createElement('img');
    imgBook.src = libro.imagen;
    imgBook.alt = libro.titulo;

    let descripcion = document.createElement('div');
    descripcion.classList.add('description');

    let titulo = document.createElement('h2');
    titulo.textContent = libro.titulo;

    let precio = document.createElement('h3');
    precio.textContent = `${libro.precio}$`;

    let botonCompra = document.createElement('button');
    botonCompra.textContent = 'Comprar';

    imagenLibro.appendChild(imgBook);
    descripcion.appendChild(titulo);
    descripcion.appendChild(precio);
    descripcion.appendChild(botonCompra);

    expensiveBooks1.appendChild(imagenLibro);
    expensiveBooks1.appendChild(descripcion);

    estante2.appendChild(expensiveBooks1);
  }
}

function booksPreciosos() {
  estante2.innerHTML = '';
  libros.filter(libro => libro.precio > 1).forEach(libro => mostrarLibroCostoso(libro));
}

