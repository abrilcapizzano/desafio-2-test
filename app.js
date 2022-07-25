// debugger

// function test(){
//   let numero = Number (prompt ('ingrese un numero'))
//   if (numero === 2  || numero === 3){
//     alert ('correcto')
//   }else{
//   while (numero !== 2){
//   alert('incorrecto')
//   let numero = Number (prompt ('ingrese un numero'))
//   if (numero === 2 || numero === 3){
//     alert ('correcto')
//     break
//   }}

// }
// }

// test ()

class destinos {
  constructor (destino, dias, adultos, menores){
    this.destino = destino
    this.dias = dias
    this.adultos = adultos
    this.menores = menores
  }
}
let destino1 = new destinos (prompt('Ingrese su destino'), prompt('Ingrese la cantidad de días'), prompt('Ingrese la cantidad de adultos'), prompt('Ingrese la cantidad de menores') )
console.log(destino1)


// let resultado = 0

// function conversor () {
//   let destino = prompt ('Ingrese el destino: Rio, Londres o Perú ').toLowerCase() 
//   let dias = Number (prompt ('Ingrese la cantidad de días'))
//   let adultos = Number (prompt('Ingrese la cantidad de adultos'))
//   let menores = Number (prompt('Ingrese la cantidad de niños'))
// let suma = (dias * 5000) + (adultos * 20000) + (menores * 10000)
//    if(destino ===  'rio'){
//       resultado = suma + 100000
//      }
// else if(destino === 'londres'){
//       resultado = suma + 170000
//     }
// else if(destino === 'perú'){
//       resultado = suma + 140000
// }else{
//   alert('Destino Incorrecto')
//   let destino = prompt ('Ingrese el destino: Rio, Londres o Perú ').toLowerCase()
//    if(destino ===  'rio'){
//     resultado = suma + 100000
//    }
// else if(destino === 'londres'){
//     resultado = suma + 170000
//   }
// else if(destino === 'perú'){
//     resultado = suma + 140000
// }
// } }
// function mostrar() {
//   alert (resultado + ' pesos')
// }
// console.log (conversor)
// console.log (mostrar)
// conversor()
// mostrar(resultado)