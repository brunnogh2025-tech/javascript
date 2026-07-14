//Alterando atributos
//classe
let title = document.querySelector("#title");
title.setAttribute("class", "testando-atributo");

console.log(title);

//disabled

let btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");

let subtitle = document.querySelector(".subtitle");

//id

subtitle.setAttribute("id", "titulo-2");

//remover atributo

let lista = document.querySelector("#lista");

lista.removeAttribute("id");