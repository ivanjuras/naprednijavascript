/*

  U fazi izvršenja JS engine (nakon što je u fazi stvaranja sve pripremljeno) ide liniju po liniju i tumači, pretvara, kompajlira i izvršava kod na računalu.

*/

function b() {
  console.log( 'Pozvao sam b!' );
}

// prva linija izvršavanja - pozovi već pripremljenu funkciju b
b();

// druga linija izvršavanja - ispiši vrijednost pripremljene varijable ('undefined')
console.log( a );

// treća linija izvršavanja - pridodaj već pripremljenoj varijabli neku vrijednost
var a = 'Hello World';

// četvrta linija izvršavanja - ponovno ispiši vrijednost varijable (sada je pridodana)
console.log( a );