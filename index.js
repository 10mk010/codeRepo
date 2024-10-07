'use strict';


console.log("Hello World!");



function checkDay(day){
    switch(day){
        case 1:
            console.log("today is Monday.");
            break;
        case 2:
            console.log("Today is Tuesday.");
            break;
        case 3:
            console.log("Today is Wednesday.");
            break;
        case 4: 
            console.log("Today is Thursday.");
            break;
        case 5: 
            console.log("Today is Friday!");
            break;
        case 6:
            console.log("Today is Saturday.");
            break;
        case 7:
            console.log("Today is Sunday.");
            break;
        default: 
            console.log("Error...");
            break;
    }
}

checkDay(2);
checkDay(8);

function menesioPavadinimas(menesis){
    switch(menesis){
        case "Sausis":
            console.log(1);
            break;
        case "Vasaris":
            console.log(2);
            break;
        case "Kovas":
            console.log(3);
            break;
        case "Balandis":
            console.log(4);
            break;
        case "Geguze":
            console.log(5);
            break;
        case "Birzelis":
            console.log(6);
            break;
        case "Liepa":
            console.log(7);
            break;
        case "Rugpjutis":
            console.log(8);
            break;
        case "Rugsejis":
            console.log(9);
            break;
        case "Spalis":
            console.log(10);
            break;
        case "Lapkritis":
            console.log(11);
            break;
        case "Gruodis":
            console.log(12);
            break;
        default:
            console.log("Ivedet ne menesio pavadinima")
    }
}


menesioPavadinimas("Sausis");
menesioPavadinimas("hubertas")