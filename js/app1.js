let books = [];

function submitBook() {
    let inpTitle = document.getElementById("title").value;
    let newAuthor = document.getElementById("author").value;
    let newGenre = document.getElementById("genre").value;
    let newLanguage = document.getElementById("language").value;
    let newPrice = document.getElementById("price").value;
    newPrice = parseInt(newPrice);
    let newFormat = document.getElementById("format").value;
    let newisbn = document.getElementById("isbn").value;
    let newdescription = document.getElementById("description").value;
    let newCondition = document.getElementById("condition").value;
    let newLocation = document.getElementById("location").value;
    let newPublication_date  = document.getElementById("publication_date").value;
    let newPublisher = document.getElementById("publisher").value;
    let newPages = document.getElementById("pages").value;
    newPages = parseInt(newPages);
    
    books.push({
        title: inpTitle,
        author: newAuthor,
        genre: newGenre,
        language: newLanguage,
        price: newPrice,
        format: newFormat,
        isbn: newisbn,
        description: newdescription,
        condition: newCondition,
        location: newLocation,
        publication_date: newPublication_date,
        publisher: newPublisher,
        pages: newPages
    });
    
    displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = ""; // Limpiar la lista antes de actualizar

    books.forEach(book => {
        const listItem = document.createElement("li");
        listItem.textContent = `${book.title} - ${book.author} - ${book.genre} - ${book.language} - ${book.price} - ${book.format} - ${book.isbn} - ${book.description} - ${book.condition} - ${book.location} - ${book.publication_date} - ${book.publisher} - ${book.pages} páginas`;
        bookList.appendChild(listItem);
    });
}