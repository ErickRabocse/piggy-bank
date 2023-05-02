//Realizar un programa que te pregunte cada 15 segundos que estás haciendo y si tu respuesta no es “trabajar”, te pida depositar $5 en tu alcancia. El programa debe terminar automáticamente a los 2min y mostrarnos cuánto dinero tenemos ahorrado.

let counter = 135; //135 120, plus 15 seconds removed initially
let savings = 0;
let message = setInterval(question, 15000);
let pay = document.querySelector(".pay");
let total = document.querySelector(".total");

function question() {
  let input_request = prompt("What you doin?");
  input_request;
  if (input_request !== "trabajando") {
    pay.classList.remove("pay");
    setTimeout(() => {
      pay.classList.add("pay");
    }, 6000);
    savings += 5;
  }
  counter -= 15;
  if (counter <= 0) {
    clearInterval(message);
    total.innerText = `${savings} pesos.`;
    return;
  }
}

question();

// FUNCION CON ANOTACINES Y MUCHOS CONSOLS Logger
// let counter = 135; //135 120, plus 15 seconds removed initially
// let savings = 0;
// let message = setInterval(question, 15000);

// function question() {
//   let input_request = prompt("What you doin?");
//   input_request;
//   console.log(input_request);
//   if (input_request !== "trabajando") {
//     savings += 5;
//   }
//   console.log(`current savings: ${savings}`);
//   counter -= 15;
//   console.log(`time left: ${counter}`);
//   if (counter === 0) {
//     clearInterval(message);
//     console.log(`money saved: ${savings}`);
//     return;
//   }
// }

// question();
