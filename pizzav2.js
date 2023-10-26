import promptSync from "prompt-sync";

import { elaborar } from "./pizzaapp.js";

const prompt = promptSync();

const result = prompt("Pideme tu pizza ");


console.log("Bienvenido a Pizzas Pardo ¿Qué desea?");
const opcion = prompt("Elige una pizza :D");

console.log("Opción 1 - Pizza La montañesa ");


let pizzaElegida;

switch (opcion) {
    case '1':
        pizzaElegida = elaborar();
        break;

    default:
        console.log("Error vuelve a seleccionar la pizza ");
        break;
    }