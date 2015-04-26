/*

  Okruženje varijabli (variable environment, VE) je mjesto gdje varijable žive, i gdje ih možemo dohvatiti.

  Varijable sa istim imenom a u različitim EC-evima nemaju ništa zajedničko. Svaka od tih varijabli ima svoj VE. To su potpuno različite reference na različite vrijednosti.

  Drugo ime za VE je opseg (scope). Pitamo se koji je scope neke varijable, odnosno, gdje je ta varijabla vidljiva.

*/

function b() {

  // Varijabla myVar koja je vidljiva u EC-u funkcije b
  var myVar = 3;
  console.log( myVar );

}

function a() {

  // Varijabla myVar koja je vidljiva u EC-u funkcije a
  var myVar = 2;
  console.log( myVar );

  b();

}

// Varijabla myVar koja je vidljiva u globalnom EC-u
var myVar = 1;
console.log( myVar );

a();

