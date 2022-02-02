const nome = "Maira Hanel";
let nome2 = "";
let pessoaDefault = {
    nome: "Maira Hanel",
    idade: "19",
    trabalho: "Assistente administrativo"
}

let nomes = ["Maira Hanel", "Maria Silva", "Pedro Silva"];

let pessoasListaVazia = [];

let pessoas = [
    {
        nome: "Maira Hanel",
        idade: "19",
        trabalho: "Assistente administrativo"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "UX/UI Designer"
    }
];


function alterarNome () {
    nome2 = "Maria Silva";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa);
}

function imprimirPessoas() {
    console.log("----------IMPRIMIR PESSOAS-----------");
    pessoas.forEach ((item) => {
        console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Trabalho:");
    console.log(pessoa.trabalho);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade:"28",
    trabalho: "Porteiro"
})