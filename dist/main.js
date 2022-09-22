"use strict";
const nameUser = 'Marianna Nascimento';
const idade = 30;
const statusUser = 1;
if (idade <= 2) {
    console.log('Bebê');
}
else if (idade <= 11) {
    console.log('Criança');
}
else if (idade <= 19) {
    console.log('Adulto');
}
else if (idade <= 59) {
    console.log('Adulto');
}
else {
    console.log('Idoso');
}
if (statusUser == 1) {
    console.log("Estudante");
}
else if (statusUser == 2) {
    console.log("Empresa");
}
else if (statusUser == 3) {
    console.log("Administrador");
}
else {
    console.log("Inválido");
}
switch (statusUser) {
    case 1:
        console.log('usuário');
        break;
    case 2:
        console.log('empresa');
        break;
    case 3:
        console.log('admin');
        break;
    default:
        console.log('status inválido');
}
console.log(`Seja Bem vindo ao curso de TypeScript ${nameUser}`);
// string | char(11), varchar(11), text - 21341241, 
// ncharm nvarchar, ntext(n unicode, caracteres por padrão ASC II)
// tsc -w = vigiar/olhar INICIAR O TYPESCRIPT
//-d = deamon (filha de olho na pasta)
//NODEMON ./DIST/MAIN.JS
for (let a = 10; a <= 20; a++) {
    if (a >= 12 && a < 18) {
        continue;
    }
    console.log(a);
}
console.log("------- Multiplicando --------");
let num = 3;
for (let mult = 0; mult <= 10; mult++) {
    if (mult >= 3 && mult < 10) {
        if (mult % 2 && mult > 3) {
            console.log(".");
        }
        continue;
    }
    let total = num * mult;
    console.log(`${num} x ${mult} = ${total}`);
}
for (let x = 0; x <= 10; x++) {
    let conta = x * 4;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 1 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 1;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 2 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 2;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 3 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 3;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 4 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 4;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 5 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 5;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 6 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 6;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 7 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 7;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 8 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 8;
    console.log(`2 x ${x} = ${conta}`);
}
console.log("------- Tabuada do 9 --------");
for (let x = 0; x <= 10; x++) {
    let conta = x * 9;
    console.log(`2 x ${x} = ${conta}`);
}
//CEP:
// 
