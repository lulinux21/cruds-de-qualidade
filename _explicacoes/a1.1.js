// [Dar bons nomes de variáveis]
var n1 = 10;
var n2 = 20;

console.log(n1 + n2);

// Como devs, o que mais fazemos é LER código!
// Contexto é extremamente importante!
const userFirstInputNumber = 10;
const userSecundInputNumber = 20;

console.log(userFirstInput + userSecundInput);

// ===============
var inputDoUsuario;
// No Browser
// - Pode ser uma string
// - Pode ser um elemento do DOM (Campo de busca do google)
const inputDoUsuario = document.querySelector('input').value;
const $inputDoUsuario = document.querySelector('input'); // Convensão, isso indica que estamos selecionando um element da DOM

// BOOLEANOS
// <input value="">
document.querySelector('input').hasAttribute('value'); // true | false
// has, is (tem algo, é algo)
if (hasAttribute) {} // tem o atributo ?
if (isEmpty) {} // é vazio ?
if (!hasName) {} // Não tem name ?