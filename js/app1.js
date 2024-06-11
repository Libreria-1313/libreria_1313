let books= []
function submit(books) {
    let inpTitle = document.getElementById("title").value
    let newAuthor = document.getElementById("author").value
    let newGenre = document.getElementById("genre").value
    let newLanguage = document.getElementById("language").value
    let newPrice = document.getElementById("price").value
    newPrice= parseInt(newPrice)
    let newFormat = document.getElementById("format").value
    let newisbn = document.getElementById("isbn").value
    let newdescription = document.getElementById("description").value
    let newCondicion = document.getElementById("condition").value
    let newLocation = document.getElementById("location").value
    let newPublication_date  = document.getElementById("publication_date").value
    let newPublisher = document.getElementById("publisher").value
    let newPages = document.getElementById("pages").value
    newPages = parseInt(newPages)
    
        books.push(
            {
            title: inpTitle,
            author: newAuthor,
            genre: newGenre,
            language: newLanguage,
            price: newPrice,
            format: newFormat,
            isbn: newisbn,
            description: newdescription,
            condition: newCondicion,
            location: newLocation,
            publication_date: newPublication_date,
            publisher: newPublisher,
            pages: newPages
            }
        ) 
    }
    
    console.log(books);