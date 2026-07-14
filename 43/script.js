function exibir(num){
    console.log("A operação resultou em");
}


function soma(a, b, callback){
    let op = a + b;
    callback(op);
}

function multiplicação(a, b, cb){
    let op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicação(2, 4, exibir);