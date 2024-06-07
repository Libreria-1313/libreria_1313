const libros = [
  {
    titulo: "Cien años de soledad",
    descripcion: "Esta obra maestra del realismo mágico narra la historia de la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo. García Márquez teje un tapiz de personajes y eventos extraordinarios que exploran temas universales como el amor, la soledad y el destino."
  },
  {
    titulo: "1984",
    descripcion: "En un mundo distópico dominado por un régimen totalitario, Orwell presenta una visión aterradora del futuro donde el gobierno controla cada aspecto de la vida de sus ciudadanos. Una crítica mordaz al autoritarismo y a la pérdida de libertad individual."
  },
  {
    titulo: "El principito",
    descripcion: "Este clásico de la literatura infantil y filosófica narra las aventuras de un pequeño príncipe que viaja de planeta en planeta en busca de amistad y comprensión. A través de sus encuentros, el autor ofrece reflexiones sobre la amistad, el amor y el significado de la vida."
  },
  {
    titulo: "Matar un ruiseñor",
    descripcion: "Ambientada en Alabama durante la Gran Depresión, esta novela sigue la historia de Scout Finch, una niña que observa con inocencia los prejuicios y la injusticia racial en su comunidad. Una poderosa narración sobre la compasión y la lucha por la justicia."
  },
  {
    titulo: "Don Quijote de la Mancha",
    descripcion: "La obra cumbre de la literatura española sigue las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza. A través de sus desventuras, Cervantes ofrece una aguda crítica social y reflexiones sobre la realidad y la fantasía."
  },
  {
    titulo: "Orgullo y prejuicio",
    descripcion: "Esta novela de la Regencia inglesa sigue la historia de Elizabeth Bennet y su tumultuosa relación con el altivo Sr. Darcy. Austen ofrece una sátira de la sociedad de su época mientras explora temas como el amor, el matrimonio y la clase social."
  },
  {
    titulo: "El gran Gatsby",
    descripcion: "Ambientada en la próspera década de 1920, esta novela sigue la vida del enigmático millonario Jay Gatsby y su obsesión por recuperar a su antiguo amor, Daisy Buchanan. Fitzgerald ofrece una mirada penetrante a la decadencia del sueño americano y la vacuidad de la riqueza material."
  },
  {
    titulo: "Moby Dick",
    descripcion: "Considerada una de las grandes obras maestras de la literatura estadounidense, esta novela épica sigue al capitán Ahab en su obsesiva búsqueda de venganza contra la ballena blanca, Moby Dick. Melville ofrece una profunda exploración de la obsesión, la locura y la naturaleza humana."
  },
  {
    titulo: "Anna Karenina",
    descripcion: "Esta monumental novela rusa sigue la vida de Anna Karenina, una mujer atrapada en un matrimonio infeliz que encuentra la pasión en los brazos del apuesto oficial Vronsky. Tolstói ofrece una visión profunda de la sociedad rusa del siglo XIX y reflexiona sobre el amor, la moralidad y la redención."
  },
  {
    titulo: "Rayuela",
    descripcion: "Esta novela experimental sigue los juegos mentales y emocionales del protagonista, Horacio Oliveira, mientras explora su relación con la enigmática Maga. Cortázar desafía las convenciones narrativas tradicionales y ofrece una experiencia de lectura única e innovadora."
  }
]

const body = document.getElementById('body')

listBooks(libros)
function listBooks(books) {
  books.forEach(myBook => {
    createBook(myBook)
  });
}

function createBook (book) {
  const myBook = document.createElement('div')
  myBook.classList.add('book')

  const title = document.createElement('h2')
  title.textContent = book.titulo

  const description = document.createElement('p')
  description.textContent = book.descripcion

  myBook.appendChild(title)
  myBook.appendChild(description)

  body.appendChild(myBook)

}

