// expresion de clase
/* const Rectangulo = class R {

} */

// declaracion de clase
// las class no tienen hoisting
class Rectangulo {

}

/* HOISTING
 * llevas al comienzo del archivo las variables con var y funciones definidas con function.
 */

console.log(Cuadrado); // Imprime!! NO da error
function Cuadrado(){

}


class Chancho {
  propiedad = 'propiedad';
  #hambre
  static estatico = 42;
  constructor(estado = 'feliz', hambre = false){
    this.estado = estado;
    this.#hambre = hambre;
  }
  hablar(){

    console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre!': 'satisfecho!'}`);
  }

  static comer(){
    console.log(this.estatico, 'estoy comiendo!');
  }
}


Chancho.comer()

const feliz = new Chancho('feliz');
// console.log(feliz); // Chancho { propiedad: 'propiedad', estado: 'feliz' } 
// console.log(feliz.__proto__);// {} si se prueba en el navegador mostrará todo lo que tiene la clase. MOtivo: decisión de desarrolladores de node.
// console.log(feliz.__proto__.hablar); // [Function: hablar]
feliz.hablar();


const triste = new Chancho('triste');
// triste.hablar();

const nose = new Chancho();
