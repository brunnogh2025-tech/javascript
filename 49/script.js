let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    
    console.log("clicou");

    console.log(this);

    this.style.color = "red";
});

let title = document.querySelector("#title");



title.addEventListener("click", function() {

    let subtitle = document.querySelector(".subtitle");

    subtitle.style.display = "none";
});

let subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("click", function() {

    console.log("click duplo!");
});