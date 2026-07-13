let pessoa = {
    nome : "Matheus",
    idade : 29,
    falar = function(){
        console.log("Olá, tudo bem?")
    },
    soma: function(a, b){
        return a + b;
    }
};

console.log(pessoa.nome);

console.log(pessoa.idade);

let soma = pessoa.soma(2, 2);
console.log(soma);