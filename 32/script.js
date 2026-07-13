//this no escopo global faz referência ao objeto window(detentor de alert(), document, console, e etc.)
console.log(this);
alert("Olá");
this.alert("Olá2");

let pessoa = {
    nome : "Matheus",
    idade: 29,
    falar : function() {
        console.log("Olá, tudo bem?")
    },
    dizerNome : function() {
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function() {
        this.idade++
    },
    saudacao: function(){
        return 'Sr. ' + this.nome
    },
}

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade)

pessoa.dizerNome();

console.log(this.saudacao());