document.querySelector("#submit").onclick=()=>{
    //let nombre = (document.querySelector("#nombre").value)
    let password = (document.querySelector("#password").value)

   if (password === "daniel") {
        alert("Bienvenido")
    
    }
    else {
        alert("Contraseña incorrecta")
    
    }
   
}
// var saldo = 0;
//       let entradas = [];
//       let salidas = [];
//       function agregarEntrada() {
//         let cantidad = parseFloat(document.getElementById("cantidad").value);
//         saldo += cantidad;
//         entradas.push(cantidad);
//         actualizarListas();
//       }
    

//       function agregarSalida() {
//         let cantidad = parseFloat(document.getElementById("cantidad").value);
//         saldo -= cantidad;
//         salidas.push(cantidad);
       
//     //   alert("no puede retirar")
//         actualizarListas();
       
//       }
//       function actualizarListas() {
//         let entradasHtml = "";
//         let salidasHtml = "";
//         for (let i = 0; i < entradas.length; i++) {
//           entradasHtml += "<li>+" + entradas[i] + "</li>";
//         }
//         for (let i = 0; i < salidas.length; i++) {
//           salidasHtml += "<li>-" + salidas[i] + "</li>";
//         }
//         document.getElementById("entradas").innerHTML = entradasHtml;
//         document.getElementById("salidas").innerHTML = salidasHtml;
//         document.getElementById("saldo").innerHTML = saldo.toFixed(2);
//       }
// 
var saldo = 0;
let entradas = [];
let salidas = [];

function agregarEntrada() {
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  if (cantidad >= 10 && cantidad <= 990) {
    saldo += cantidad;
    entradas.push(cantidad);
    actualizarListas();
    verificarSaldo();
  } else {
    alert("La cantidad ingresada debe estar entre 10 y 990.");
  }
}

function agregarSalida() {
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  if (cantidad >= 10 && cantidad <= 990) {
    if (saldo >= cantidad) {
      saldo -= cantidad;
      salidas.push(cantidad);
      actualizarListas();
      verificarSaldo();
    } else {
      alert("La cantidad a retirar excede el saldo de la cuenta.");
    }
  } else {
    alert("La cantidad ingresada debe estar entre 10 y 990.");
  }
}

function actualizarListas() {
  let entradasHtml = "";
  let salidasHtml = "";
  for (let i = 0; i < entradas.length; i++) {
    entradasHtml += "<li>+" + entradas[i] + "</li>";
  }
  for (let i = 0; i < salidas.length; i++) {
    salidasHtml += "<li>-" + salidas[i] + "</li>";
  }
  document.getElementById("entradas").innerHTML = entradasHtml;
  document.getElementById("salidas").innerHTML = salidasHtml;
  document.getElementById("saldo").innerHTML = saldo.toFixed(2);
}

function verificarSaldo() {
  if (saldo < 10) {
    alert("El saldo no puede ser menor a 10.");
  } else if (saldo > 990) {
    alert("El saldo no puede ser mayor a 990.");
  }
}

// var saldo = 0;
// let entradas = [];
// let salidas = [];
// let password = "";

// function verificarPassword() {
//   password = document.getElementById("password").value;
//   if (password === "daniel") {
//     alert("Contraseña correcta. Puede agregar entradas y salidas.");
//   } else {
//     alert("Contraseña incorrecta. No puede agregar entradas y salidas.");
//   }
// }

// function agregarEntrada() {
//   let cantidad = parseFloat(document.getElementById("cantidad").value);
//   if (password === "daniel") {
//     if (cantidad >= 10 && cantidad <= 990) {
//       saldo += cantidad;
//       entradas.push(cantidad);
//       actualizarListas();
//       verificarSaldo();
//     } else {
//       alert("La cantidad ingresada debe estar entre 10 y 990.");
//     }
//   } else {
//     alert("Debe ingresar la contraseña para agregar entradas.");
//   }
// }

// function agregarSalida() {
//   let cantidad = parseFloat(document.getElementById("cantidad").value);
//   if (password === "daniel") {
//     if (cantidad >= 10 && cantidad <= 990) {
//       if (saldo >= cantidad) {
//         saldo -= cantidad;
//         salidas.push(cantidad);
//         actualizarListas();
//         verificarSaldo();
//       } else {
//         alert("La cantidad a retirar excede el saldo de la cuenta.");
//       }
//     } else {
//       alert("La cantidad ingresada debe estar entre 10 y 990.");
//     }
//   } else {
//     alert("Debe ingresar la contraseña para agregar salidas.");
//   }
// }

// function actualizarListas() {
//   let entradasHtml = "";
//   let salidasHtml = "";
//   for (let i = 0; i < entradas.length; i++) {
//     entradasHtml += "<li>+" + entradas[i] + "</li>";
//   }
//   for (let i = 0; i < salidas.length; i++) {
//     salidasHtml += "<li>-" + salidas[i] + "</li>";
//   }
//   document.getElementById("entradas").innerHTML = entradasHtml;
//   document.getElementById("salidas").innerHTML = salidasHtml;
//   document.getElementById("saldo").innerHTML = saldo.toFixed(2);
// }

// function verificarSaldo() {
//   if (saldo < 10) {
//     alert("El saldo no puede ser menor a 10.");
//   } else if (saldo > 990) {
//     alert("El saldo no puede ser mayor a 990.");
//   }
// }