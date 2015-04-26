
/*

	Kad god se u Javascriptu izvršava neki kod, Javascript engine omotava ga unutar nečega što se zove kontekst izvršavanja (execution context, u daljnjem tekstu EC).

	Osnovni execution context je Global EC. Javascript engine unutar njega sam stvara ove 2 stvari - globalni objekt (Global object) i posebnu varijablu 'this'. Također, unutar njega se izvršava i sam kod.

	Bitno je napomenuti da se u drugim EC-ima stvara i nešto što se zove referenca na vanjsko okruženje (Outer environment), ali pošto je Global EC na rubu, on nema svoje vanjsko okruženje.

	Unutar browsera, globalni objekt je 'window'. Ključna riječ 'this' je referenca upravo na taj objekt. Globalno ustvari znači "ne unutar funkcije".

	Sve varijable i funkcije napravljene unutar globalnog EC-a pripajaju se na globalni objekt (u browseru - window) i postaju njegova svojstva (properties) i metode (methods).

*/

var a = 'Hello World';

function b() {
	
}

console.log( a );
console.log( window.a );

console.log( b );
console.log( window.b );