// Array de libros
let books = [];

// Función flecha para listar todos los libros
const listarLibros = () => {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = ''; // Limpiar la lista antes de agregar los libros
    
    books.forEach(libro => {
        const li = document.createElement('li');
        li.textContent = `Título: ${libro.titulo}, Autor: ${libro.autor}, Idioma: ${libro.idioma}, Editorial: ${libro.editorial}, Disponibilidad: ${libro.disponibilidad}, Precio: $${libro.precio.toFixed(2)}`;
        bookList.appendChild(li);
    });
}

// Función flecha para crear un nuevo libro
const crearLibro = (disponibilidad, idioma, editorial, titulo, autor, precio) => {
    let nuevoLibro = {
        disponibilidad,
        idioma,
        editorial,
        titulo,
        autor,
        precio: parseFloat(precio)
    };
    books.push(nuevoLibro);
    listarLibros(); // Actualizar la lista de libros en la página
}

// Manejar el evento de envío del formulario
document.getElementById('bookForm').addEventListener('submit', event => {
    event.preventDefault(); // Evitar que el formulario se envíe de forma predeterminada
    
    const disponibilidad = document.getElementById('disponibilidad').value;
    const idioma = document.getElementById('idioma').value;
    const editorial = document.getElementById('editorial').value;
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const precio = document.getElementById('precio').value;
    
    crearLibro(disponibilidad, idioma, editorial, titulo, autor, precio);
    
    // Limpiar el formulario después de enviar
    document.getElementById('bookForm').reset();
});
