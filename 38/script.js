// criar elemento
let el = document.createElement("div");

el.classList = "div_criada";

console.log(el);

let container = document.querySelector("#container");

//inserindo elemento filho
container.appendChild(el);

console.log(container);

//insertBefore - insere antes

let before = document.createElement("div");

before.classList = "div-before";

let ref = document.querySelector("#container .div-criada");

console.log(ref);

container.insertBefore(before, ref);