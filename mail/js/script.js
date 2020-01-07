

var listaMail = ['pippo@gmail.com' , 'pluto@alice.it', 'paperino@hotmail.com', 'topolino@aruba.it'];

var checkMail = prompt('inserisci la tua email');
var mail = false;

for (var i = 0; i < listaMail.length; i++) {
  var lista = listaMail[i];
  if(lista == checkMail){
    mail = true;
  }
}

if (mail == true){
  alert('Complimenti, puoi accedere ai nostri contenuti esclusivi');
}else{
  alert('mi dispiace, email non riconosciuta');
}
