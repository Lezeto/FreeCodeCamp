let email="info@test.dev";
function maskEmail(mail){
  let emailDivided=mail.split("@");
  let name=emailDivided[0];
  let web=emailDivided[1];
  let primerCaracter=name.slice(0,1);
  let ultimoCaracter=name.slice(-1);
  let asteriscos="*".repeat(name.length-2);
  return primerCaracter+asteriscos+ultimoCaracter+"@"+web;
}
console.log(maskEmail(email))