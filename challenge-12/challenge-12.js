(function () {
  /*
  Envolva todo o conteúdo desse arquivo em uma IIFE.
  */
  /*
  Crie um objeto chamado `person`, com as propriedades:
      `name`: String
      `lastname`: String
      `age`: Number
  Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
  de valor para cada propriedade.
  */
  var person = {name: 'Guilherme', lastname: 'Ortiz', age: 33}
  console.log( 'Propriedades de "person":' );
   console.log(person);
  /*
  Mostre no console, em um array, todas as propriedades do objeto acima.
  Não use nenhuma estrutura de repetição, nem crie o array manualmente.
  */
  console.log( Object.Keys(person));
  
  /*
  Crie um array vazio chamado `books`.
  */
  var books = [];
  
  /*
  Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
  seguintes propriedades:
  `name`: String
  `pages`: Number
  */
  books.push({ name: 'livro1', pages: 40 })
  books.push({ name: 'livro2', pages: 240 })
  books.push({ name: 'livro3', pages: 340 })

  console.log( '\nLista de livros:' );
  
  /*
  Mostre no console todos os livros.
  */
  console.log(books);
  
  console.log( '\nLivro que está sendo removido:' );
  /*
  Remova o último livro, e mostre-o no console.
  */
  var lastBook = books.pop();
  console.log(lastBook)
  console.log( '\nAgora sobraram somente os livros:' );
  /*
  Mostre no console os livros restantes.
  */
  console.log("Livros restantes: ");
  console.log(books)
  
  /*
  Converta os objetos que ficaram em `books` para strings.
  */
  console.log( '\nLivros em formato string:' );
  var stringBooks = JSON.stringify(books)
  
  /*
  Mostre os livros nesse formato no console:
  */
  console.log(stringBooks);
  console.log("Livros restantes em string: ");
  
  /*
  Converta os livros novamente para objeto.
  */
  var books = JSON.parse(books);
  console.log( '\nAgora os livros são objetos novamente: ', books );
  
  /*
  Mostre no console todas as propriedades e valores de todos os livros,
  no formato abaixo:
      "[PROPRIEDADE]: [VALOR]"
  */
  for (var i = 0; i <= books.length -1; i++) {
   for (var props in books[i]) {
      console.log(props,':',books[i][props])
    }
  }
  
  /*
  Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
  seu nome. Adicione seu nome completo no array.
  */
  var myName = ['G', 'U', 'I', 'L', 'H', 'E', 'R', 'M', 'E'];
  console.log( '\nMeu nome é:', myName);
  
  /*
  Juntando todos os itens do array, mostre no console seu nome.
  */
  console.log(myName.join(''));

  console.log( '\nMeu nome invertido é:' );
  
  /*
  Ainda usando o objeto acima, mostre no console seu nome invertido.
  */
  console.log(myName.reverse().join(''));
  
  console.log( '\nAgora em ordem alfabética:' );
  /*
  Mostre todos os itens do array acima, odenados alfabéticamente.
  */
  console.log(myName.sort())
})();
