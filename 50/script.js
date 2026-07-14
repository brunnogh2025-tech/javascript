// Evento de mouseover
let title = document.querySelector("#title");

title.addEventListener("mouseover", function(){
    this.style.backgroundColor = "yellow";
});

// Evento de mouseout
title.addEventListener("mouseout", function(){

this.style.backgroundColor = "white";

});