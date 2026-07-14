//clearTimeout na prática
var x = 0;

let myTimer = setTimeout(function(){
    console.log("O X é 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O X não é mais 0.");
}

//clearSetInterval na prática
let myInterval = setInterval(function () {
    console.log("Imprimindo intervalo");
}, 500);

setTimeout(function() {
    console.log("Não precisamos mais repetir!");
    clearInterval(myInterval);
}, 1500);