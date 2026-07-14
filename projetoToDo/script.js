let btn = document.getElementById("add");
btn.addEventListener("click", function(){
    let input = document.createElement("input");
    let button = document.createElement("button");
    let form = document.getElementById("form");
    form.appendChild(input);
    form.appendChild(button);
});