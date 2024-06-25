// Agregar un event listener al botón con id 'submitButton'
document.getElementById('submitButton').addEventListener('click', function() {
    // Obtener el formulario con id 'dataForm'
    const form = document.getElementById('dataForm');

    // Crear un objeto FormData para obtener los datos del formulario
    const formData = new FormData(form);

    // Array para almacenar la salida formateada de los datos del formulario
    const output = [];

    // Iterar sobre cada par clave-valor en formData
    formData.forEach((value, key) => {
        // Formatear cada par clave-valor y agregarlo al array de salida
        output.push(`${key}: ${value}`);
    });

    // Mostrar los datos del formulario en la consola
    console.log('Datos del formulario:');
    console.log(output);

    // Si deseas mostrar los datos en algún elemento HTML
    // Puedes hacerlo accediendo al elemento y asignando su contenido
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = `<h2>${formData.get('titulo')}</h2>`;
});
