
/*

  Javascriptu ne smeta ako funkcija ne dobije parametar koji očekuje. Umjesto toga, taj parametar jednostavno postaje undefined, zbog toga što se svim varijablama u vrijeme stvaranja EC-a dodjeljuje vrijednost undefined.

  OR operator ( || ) u JS-u ne vraća samo true ili false, već vraća onu vrijednost koja se MOŽE PRETVORITI u true.

  Zbog toga se operator OR često koristi kao operator za dodjeljivanje defaultnih vrijednosti.

  Ako se obadvije vrijednosti mogu pretvoriti u true, onda vraća prvu.

*/

function greet( name ) {

  // OR operator u JS-u vraća vrijednost koja se može pretvoriti u true 
  name = name || '<vaše ime>';

  console.log( name );
  console.log( 'Hello ' + name );

}

greet();