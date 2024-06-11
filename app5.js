
// Función para ajustar el stock de un libro seleccionado
function adjustStock(increase) {
    const bookSelectStock = document.getElementById('bookSelectStock');
    const stockChange = parseInt(document.getElementById('stockChange').value, 10);
    const selectedIndex = bookSelectStock.value;

    if (selectedIndex !== '' && !isNaN(stockChange) && stockChange > 0) {
        if (increase) {
            books[selectedIndex].stock += stockChange;
        } else {
            books[selectedIndex].stock = Math.max(0, books[selectedIndex].stock - stockChange);
        }
        loadBooks();
        alert('Stock ajustado con éxito');
    } else {
        alert('Por favor, seleccione un libro y complete el campo de cantidad a ajustar.');
    }
}

// Cargar los libros al cargar la página
document.addEventListener('DOMContentLoaded', loadBooks);
