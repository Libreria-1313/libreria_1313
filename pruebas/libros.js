// Define los libros iniciales
const libros = [
    {
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        idioma: "Español",
        precio: 1000,
        formato: "Físico",
        isbn: "978-84-983-8708-4",
        descripcion: "El nombre del viento es una novela de fantasía escrita por Patrick Rothfuss. Fue publicada por la editorial de alta calidad Almadire en 2007.",
        estado: "Nuevo",
        ubicacion: "Biblioteca",
        fecha_publicacion: "2007-03-17",
        editorial: "Almadire",
        paginas: 698,
    },
    {
        titulo: "El temor de un hombre sabio",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        idioma: "Español",
        precio: 1200,
        formato: "Físico",
        isbn: "978-84-983-8728-2",
        descripcion: "El temor de un hombre sabio es la segunda novela de la serie Crónica del asesino de reyes, escrita por Patrick Rothfuss.",
        estado: "Nuevo",
        ubicacion: "Biblioteca",
        fecha_publicacion: "2011-03-01",
        editorial: "Almadire",
        paginas: 1190,
    },
    {
        titulo: "La música del silencio",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        idioma: "Español",
        precio: 800,
        formato: "Físico",
        isbn: "978-84-670-5865-8",
        descripcion: "La música del silencio es una novela corta escrita por Patrick Rothfuss, ambientada en el mismo mundo que El nombre del viento.",
        estado: "Nuevo",
        ubicacion: "Biblioteca",
        fecha_publicacion: "2014-10-28",
        editorial: "Almadire",
        paginas: 147,
    }
];

// Importar nuevosLibros.js
import { nuevosLibros } from './nuevosLibros.js';

// Agregar nuevos libros al array de libros
libros.push(...nuevosLibros);
