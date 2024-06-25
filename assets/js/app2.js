document.getElementById('submitButton').addEventListener('click', function() {
    // Selecciona el formulario con el id 'dataForm'
    const form = document.getElementById('dataForm');
    
    // Crea un nuevo objeto FormData con los datos del formulario
    const formData = new FormData(form);

    // Crea un array para almacenar los datos del formulario
    const output = [];
    
    // Recorre cada par clave-valor en el FormData
    formData.forEach((value, key) => {
        // Añade una cadena de texto con el formato "clave: valor" al array output
        output.push(`${key}: ${value}`);
    });

    // Muestra en la consola los datos del formulario
    console.log('Datos del formulario:');
    console.log(output);

    // Si deseas también mostrar los datos en algún elemento HTML
    // Puedes hacerlo de la siguiente manera:
    const titulo = document.getElementById('titulo');
    // Establece el contenido HTML del elemento con el id 'titulo'
    // Utiliza el valor del campo 'titulo' del formulario
    titulo.innerHTML = `<h2>${formData.get('titulo')}</h2>`;
});
