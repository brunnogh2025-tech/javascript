//criar elemento
let a_inserir = document.createElement("h3");

a_inserir.classList = "testando-classe";

let texto = document.createTextNode("Este é o texto do h3");

a_inserir.appendChild(texto);

console.log(a_inserir);

//selecionar o elemento a ser trocado
let a_trocar = document.querySelector("#title");

console.log(a_inserir);

//selecionar o pai do elemento

let pai = title.parentNode;

//trocar os elementos
pai.replaceChild(a_inserir, a_trocar);