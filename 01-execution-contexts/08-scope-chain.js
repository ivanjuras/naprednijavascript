/*

	Svaki EC dolazi sa referencom na vanjsko okruženje (outer environment, OE).

	Ako Javascript engine ne pronađe varijablu unutar svog okruženja (variable environment, VE), nastavit će tražiti tu varijablu u sljedećem vanjskom okruženju, i tako sve do najrubnijeg EC-a, Global EC-a.

	Cijeli put koji JS engine pređe da ni našao varijablu zove se lanac opsega (scope chain).

*/

//  1. Vanjsko okruženje funkcije b je globalni EC jer je fizički napravljena u njemu
function b() {

	console.log( myVar );

}

function a() {

	// 3. Vanjsko okruženje funkcije c je EC funkcije a jer je fizički napravljena u njemu 
	function c() {
	
		console.log( myVar );
	
	}

	var myVar = 2;
	b();
	c();

}

// 2. Globalna varijabla myVar je varijabla koju JS engine pronalazi
var myVar = 1;
a();