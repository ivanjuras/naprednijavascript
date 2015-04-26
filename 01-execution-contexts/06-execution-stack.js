/*

	Kada mislimo na "invokaciju", mislimo na pozivanje funkcije.

	Kad god pozovemo funkciju stvara se novi EC te funkcije. Taj EC stavlja se na vrh stoga svih EC-eva. Na dnu je globalni EC.

	Kada se sav kod unutar EC-a izvrši, taj EC se briše sa stoga.

*/

// 2. EC ove funkcije sada prolazi kroz 2 faze: stvaranje i izvršavanje.
function a() {

	// 3. poziva se funkcija b, stvara se novi EC za funkciju b
	b();
	
	var a;

}

function b() {

	console.log( 'Ja sam funkcija b!' );

}

// 1. pozivamo funkciju a, stvara se novi EC za funkciju a 
a();

var d;

