
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

function bookspreasi() {
  let bookcostoso = libros.filter(libros => libros.precio > 100)
  bookcostoso.forEach(libros => makeCard(libros))
  return bookcostoso
}

bookspreasi(libros);

