/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [2, "Guilherme", 1, true, 5, {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var retornaArray = arr => arr;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(retornaArray()[1]); //'Guilherme'

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var retornaArray2 = (array, numero) => array[numero];

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDiferente = [1, "Ortiz", true, [3, 5, 3], {}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(retornaArray2(arrayDiferente, 0));
console.log(retornaArray2(arrayDiferente, 1));
console.log(retornaArray2(arrayDiferente, 2));
console.log(retornaArray2(arrayDiferente, 3));
console.log(retornaArray2(arrayDiferente, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
var book = nomeLivro => {
  var objetos = {
    "As aventuras de jack Binks": {
      quantidadePaginas: 40,
      autor: "LT hero",
      editora: "Fundão"
    },
    "Na torre de Babel": {
      quantidadePaginas: 37,
      autor: "Lob Sang",
      editora: "Gonzaguinha"
    },
    "Eyed of torneto": {
      quantidadePaginas: 21,
      autor: "Steve tey",
      editora: "Reliquias"
    }
  };
  return !nomeLivro ? objetos : objetos[nomeLivro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());
//As aventuras de jack Binks: {quantidadePaginas: 40, autor: "LT hero", editora: "Fundão"}
//Eyed of torneto: {quantidadePaginas: 37, autor: "Lob Sang", editora: "Gonzaguinha"}
//Na torre de Babel: {quantidadePaginas: 21, autor: "Steve tey", editora: "Reliquias"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "Na torre de Babel";
console.log(
  "O livro " +
    nomeLivro +
    " tem " +
    book(nomeLivro).quantidadePaginas +
    " páginas!"
); //"O livro nomeLivro2 tem 37 páginas!"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var nomeLivro = "Na torre de Babel";
console.log(
  "O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + "."
); //"O autor do livro nomeLivro2 é Lob Sang."
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var nomeLivro = "Na torre de Babel";
console.log(
  "O livro " +
    nomeLivro +
    " foi publicado pela editora " +
    book(nomeLivro).editora +
    "."
); //"O livro nomeLivro2 foi publicado pela editora Gonzaguinha."
