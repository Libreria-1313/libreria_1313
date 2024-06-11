// Definimos una clase Libro
class Libro {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    // Método para aplicar el descuento del 10%
    aplicarDescuento() {
      this.precio = this.precio * 0.9;
    }
  
    // Método para quitar el descuento y volver al precio original
    quitarDescuento() {
      this.precio = this.precio / 0.9;
    }
  }
  
  // Creamos algunos libros
  let libro1 = new Libro("El Señor de los Anillos", 50);
  let libro2 = new Libro("Harry Potter", 40);
  
  // Aplicamos el descuento del 10%
  libro1.aplicarDescuento();
  libro2.aplicarDescuento();
  
  // Mostramos los precios modificados
  console.log("Precio del libro 1 con descuento: $" + libro1.precio);
  console.log("Precio del libro 2 con descuento: $" + libro2.precio);
  
  // Quitamos el descuento
  libro1.quitarDescuento();
  libro2.quitarDescuento();
  
  // Mostramos los precios originales
  console.log("Precio original del libro 1: $" + libro1.precio);
  console.log("Precio original del libro 2: $" + libro2.precio);