/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'CampoeonaTei';

console.log(championship);

// CampoeonaTei

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?

var teams = ['são paulo', 'fluminense', 'inter', 'bahia', 'santos'];

console.log( 'Times que estão participando do campeonato:', teams );
//Times que estão participando do campeonato: (5) ["são paulo", "fluminense", "inter", "bahia", "santos"]0: "são paulo"1: "fluminense"2: "inter"3: "bahia"4: "santos"length: 5__proto__: Array(0)


/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
showTeamPosition = (numero) => {
  if (numero <= 5) {
	  return console.log("O time que está em "+numero+"º lugar é o "+teams[numero-1]+".");
  }
  return console.log("Não temos a informação do time que está nessa posição.");
}
//showTeamPosition(1);
//O time que está em 1º lugar é o são paulo.

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(3);
//O time que está em 3º lugar é o inter.

showTeamPosition(1);
//O time que está em 1º lugar é o são paulo.

showTeamPosition(5);
//O time que está em 5º lugar é o santos.

showTeamPosition(6);
//Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero = 20;
while(numero <= 30) {
  console.log(numero++)
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
convertToHex = (cor) => {
  var hexa;
  switch(cor) {
    case 'red':
      hexa = 'FF0000';
      break;
    case 'blue':
      hexa = '0000FF';
      break;
    case 'yellow':
      hexa = 'FFFF00';
      break;
    case 'white':
      hexa = 'FFFFFF';
      break;
    case 'black':
      hexa = '000000';
      break;
    default: 
      console.log( "Não temos o equivalente hexadecimal para "+ cor +".");
  }
  return console.log("O hexadecimal para a cor "+ cor +" é "+ hexa +".");
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
/*
convertToHex('green');
Não temos o equivalente hexadecimal para green.

convertToHex('blue');
O hexadecimal para a cor blue é 0000FF .

convertToHex('red');
O hexadecimal para a cor red é FF0000 .

convertToHex('black');
O hexadecimal para a cor black é 000000 .

convertToHex('white');
O hexadecimal para a cor white é FFFFFF .

convertToHex('pink');
Não temos o equivalente hexadecimal para pink.

convertToHex('gold');
Não temos o equivalente hexadecimal para gold.

convertToHex('yellow');
Não temos o equivalente hexadecimal para yellow.
*/
