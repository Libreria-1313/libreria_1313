// Definir la lista de libros
const libros = [
  {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Ficción",
      idioma: "Español",
      precio: "15.99 EUR",
      formato: "Físico",
      isbn: "978-3-16-148410-0",
      descripcion: "Una de las obras más importantes de la literatura hispanoamericana.",
      estado: "Nuevo",
      ubicacion: "Madrid, España",
      fecha_publicacion: "1967-06-05",
      editorial: "Editorial Sudamericana",
      paginas: 471
  },
  // Agregar más libros si es necesario
];

// Función para aplicar el descuento del 10% a todos los libros
function aplicarDescuento(libros) {
  libros.forEach(libro => {
      let precioActual = parseFloat(libro.precio.split(" ")[0]); // Convertir el precio a un número
      precioActual *= 0.9; // Aplicar descuento del 10%
      libro.precio = `${precioActual.toFixed(2)} EUR`; // Actualizar el precio del libro
  });
}

// Función para restaurar los precios originales de todos los libros
function restaurarPreciosOriginales(libros) {
  libros.forEach(libro => {
      // Se podría asumir que se tiene almacenado el precio original en otra propiedad, por simplicidad aquí usaremos el precio original en el objeto original.
      libro.precio = "15.99 EUR"; // Restaurar el precio original (en este caso, se asume que todos los libros tienen el mismo precio original)
  });
}

// Aplicar descuento del 10%
aplicarDescuento(libros);

// Verificar precios después del descuento
libros.forEach(libro => {
  console.log(`${libro.titulo}: ${libro.precio}`);
});

// Restaurar precios originales
restaurarPreciosOriginales(libros);

// Verificar precios después de restaurar
libros.forEach(libro => {
  console.log(`${libro.titulo}: ${libro.precio}`);
});