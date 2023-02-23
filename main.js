document.querySelector("#submit").onclick=()=>{
    let nombre = (document.querySelector("#nombre").value)
    let password = (document.querySelector("#password").value)

   if (password === "daniel") {
        alert("Bienvenido")
    
    }
    else {
        alert("Contraseña incorrecta")
    
    }
   
}


//ingresar dinero

/*let saldo = 0;
let cantidad1 = (document.querySelector("#monto1").value)
let cantidad2 = (document.querySelector("#monto2").value)

document.querySelector("#btnAgregar").onclick = ()=>{
function agregarFondos(cantidad1) {
  saldo += cantidad1;
  alert(`Se han agregado ${cantidad1} al saldo. Saldo actual: ${saldo}`);
}
agregarFondos()
}

//retirar dinero
document.querySelector("#btnRetirarMonto").onclick = ()=>{
function retirarFondos(cantidad2) {
  if (saldo >= cantidad2) {
    saldo -= cantidad2;
    alert(`Se han retirado ${cantidad2} del saldo. Saldo actual: ${saldo}`);
  } else {
    alert(`Saldo insuficiente para retirar ${cantidad2}. Saldo actual: ${saldo}`);
  }
}
retirarFondos()
}*/
/* for(let index2 = 0; index2<ingredientes[index].length; index2++){
    ingredienteBonito += ingredientes[index][index2]
    ingredienteBonito += " "*/

// let saldo = 0;

// document.querySelector("#btnAgregar").onclick = ()=>{
//       let cantidad1 = parseFloat(document.querySelector("#monto1").value);
//       agregarFondos(cantidad1);
//     }
    
// document.querySelector("#btnRetirarMonto").onclick = ()=>{
//       let cantidad2 = parseFloat(document.querySelector("#monto2").value);
//       retirarFondos(cantidad2);
//     }
    
//     function agregarFondos(cantidad1) {
//       if (isNaN(cantidad1)) {
//         alert('Ingrese una cantidad válida.');
//         return;
//       }
//       saldo += cantidad1;
//       document.querySelector("#total").innerHTML = saldo;
//       alert(`Se han agregado ${cantidad1} al saldo. Saldo actual: ${saldo}`);
//     }
    
//     function retirarFondos(cantidad2) {
//       if (isNaN(cantidad2)) {
//         alert('Ingrese una cantidad válida.');
//         return;
//       }
//       if (saldo >= cantidad2) {
//         saldo -= cantidad2;
//         document.querySelector('#saldo').textContent = saldo;
//         alert(`Se han retirado ${cantidad2} del saldo. Saldo actual: ${saldo}`);
//       } else {
//         alert(`Saldo insuficiente para retirar ${cantidad2}. Saldo actual: ${saldo}`);
//       }
//     }

    
    
    
    
    