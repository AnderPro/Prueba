// las funciones de este tipo tienen un contexto de this. 
// Cuando llamamos a una funcion con la palabra reservada de new ignora el return, y retorna implicitamente el this.
// Herencia basada en prototipos
// funcion tbn son clases basadas en prototipos
//
function Fn() {
  this.prop = 'propiedad';
  return 'holamundo';
}

Fn.prototype.lala = function FuncionDePrototipo(){}
const r =  new Fn();
console.log(r.__proto__);

/*
 * Js al ser un lenguaje multiparadigma implmenta herencia basada en prototipos.
 * */

// fat arrow function
// no tiene contexto de this. el this pertence al scope anterior.
const fatFn = () => {
  return 'hola mundo';
}

const r1 = new fatFn();
console.log(r1);
