
/*

  Kada se stvara EC neke funkcije, uz okruženje varijabli, this ključnu riječ i referencu na vanjsko okruženje, JS stvara i varijablu arguments, koja je objekt, sličan kao polje, svih argumenata koji su prosljeđeni u tu funkciju.  

*/

function pozdrav() {

  console.log( 'Ime: ' + arguments[0] );
  console.log( 'Prezime: ' + arguments[1] );
  console.log( 'Jezik: ' + arguments[2] );

}

pozdrav( 'Ivan', 'Juras', 'hrvatski' );
