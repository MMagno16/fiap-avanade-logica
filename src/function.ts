// o comando ALERT não é do JS. É da janela do navegado
// da api que o js tem acesso.

// API = grupo de codigo

// aplication programmin interface


//subrotina : se não tiver return é subrotina
function escreveConsole(): void { // void é sub. não dá retorno
    console.log('Dale, Inter!');
}
//funciton - a função é livre
function escreve(): string {
    return 'Dale, INTER!';
}

escreveConsole();
console.log(`O melhor time do mundo é o ${escreve()}`);


// existem duas categorias de funções
// funções built-in = são função que ja vem com o javascript
//user defined function = são funções que o usuário cria

// funções built-in
const empresa = 'Avanade'
console.log(
    empresa.toLocaleUpperCase(),
    empresa.toLowerCase(),
    empresa.length
);

//Quando tem () é método, e sem é uma propriedade
// um método faz uma coisa
// uma propriedade armazena alguma coisa

const locale: string = 'pt-br';
const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
}

console.log(new Date().toLocaleDateString(locale, options));

const user = {
    name: 'João',
    age: 25,
    email: 'joao@gmail.com',
    adress: {
        street: 'Ria ABC',
        number: 1000,
        city: 'São Paulo',
        state: 'SP',
    },
    cpf: '123.456.789-00'
}