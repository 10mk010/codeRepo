'use strict';
// 1 uzduotis 

const manoVardas = "Martynas Katkus";
console.log(manoVardas.toUpperCase());

// 2 uzduotis

function lyginisArNe(x){
    if(x % 2 === 0){
        console.log(`${x} yra lyginis.`);
    } else {
        console.log(`${x} yra nelyginis.`);
    }
}

lyginisArNe(10);
lyginisArNe(11);

// 3 uzduotis

let skaicius1 = Number(prompt("prasau iveskite skaiciu"));
let skaicius2 = Number(prompt("iveskite dar viena skaiciu"));
let zenklas = prompt("iveskite aritmetini zenkla (+, -, *, /)");

let atsakymas;

if (zenklas === "+"){
    atsakymas = skaicius1 + skaicius2;
} else if (zenklas === "-"){
    atsakymas = skaicius1 - skaicius2;
} else if (zenklas === "*"){
    atsakymas = skaicius1 * skaicius2; 
} else if (zenklas === "/"){
    atsakymas = skaicius1 / skaicius2;
} else (
    atsakymas = "Kazka netaip ivedet. prasau pameginkite is naujo."
)
window.alert(atsakymas);