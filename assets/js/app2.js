document.getElementById('submitButton').addEventListener('click', function() {
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);

    const output = [];
    formData.forEach((value, key) => {
        output.push(`${key}: ${value}`);
    });

    // Mostrar en la consola los datos del formulario
    console.log('Datos del formulario:');
    console.log(output);

    // Si deseas también mostrar los datos en algún elemento HTML
    // Puedes hacerlo de la siguiente manera:
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = `<h2>${formData.get('titulo')}</h2>`;
});