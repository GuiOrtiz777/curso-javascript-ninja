/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [2, 3, 1, 4, 5, 6];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var retornaArray = (array2 = [2, 3, 9, 7, 4]) => array2;

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray()[1]; //3

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
retornaArray2(arrayDiferente, 0);
retornaArray2(arrayDiferente, 1);
retornaArray2(arrayDiferente, 2);
retornaArray2(arrayDiferente, 3);
retornaArray2(arrayDiferente, 4);
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
    nomeLivro1: {
      quantidadePaginas: 40,
      autor: "LT hero",
      editora: "Fundão"
    },
    nomeLivro2: {
      quantidadePaginas: 37,
      autor: "Lob Sang",
      editora: "Gonzaguinha"
    },
    nomeLivro3: {
      quantidadePaginas: 21,
      autor: "Steve tey",
      editora: "Reliquias"
    }
  };
  return nomeLivro != undefined ? objetos[nomeLivro] : objetos;
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
//nomeLivro1: {quantidadePaginas: 40, autor: "LT hero", editora: "Fundão"}
//nomeLivro2: {quantidadePaginas: 37, autor: "Lob Sang", editora: "Gonzaguinha"}
//nomeLivro3: {quantidadePaginas: 21, autor: "Steve tey", editora: "Reliquias"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var book = nomeLivro => {
  var objetos = {
    nomeLivro1: {
      quantidadePaginas: 40,
      autor: "LT hero",
      editora: "Fundão"
    },
    nomeLivro2: {
      quantidadePaginas: 37,
      autor: "Lob Sang",
      editora: "Gonzaguinha"
    },
    nomeLivro3: {
      quantidadePaginas: 21,
      autor: "Steve tey",
      editora: "Reliquias"
    }
  };
  return (
    "O livro " +
    nomeLivro +
    " tem " +
    objetos[nomeLivro].quantidadePaginas +
    " páginas!"
  );
};
book("nomeLivro2"); //"O livro nomeLivro2 tem 37 páginas!"
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var book = nomeLivro => {
  var objetos = {
    nomeLivro1: {
      quantidadePaginas: 40,
      autor: "LT hero",
      editora: "Fundão"
    },
    nomeLivro2: {
      quantidadePaginas: 37,
      autor: "Lob Sang",
      editora: "Gonzaguinha"
    },
    nomeLivro3: {
      quantidadePaginas: 21,
      autor: "Steve tey",
      editora: "Reliquias"
    }
  };
  return (
    "O autor do livro " + nomeLivro + " é " + objetos[nomeLivro].autor + "."
  );
};
book("nomeLivro2"); //"O autor do livro nomeLivro2 é Lob Sang."
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var book = nomeLivro => {
  var objetos = {
    nomeLivro1: {
      quantidadePaginas: 40,
      autor: "LT hero",
      editora: "Fundão"
    },
    nomeLivro2: {
      quantidadePaginas: 37,
      autor: "Lob Sang",
      editora: "Gonzaguinha"
    },
    nomeLivro3: {
      quantidadePaginas: 21,
      autor: "Steve tey",
      editora: "Reliquias"
    }
  };
  return (
    "O livro " +
    nomeLivro +
    " foi publicado pela editora " +
    objetos[nomeLivro].editora +
    "."
  );
};
book("nomeLivro2"); //"O livro nomeLivro2 foi publicado pela editora Gonzaguinha."
