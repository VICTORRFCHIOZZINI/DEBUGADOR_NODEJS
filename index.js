const ENTRADA = require('prompt-sync')();
console.log('OI');
let NOME = ENTRADA('DIGITE O NOME - ');
console.log('OI ' + NOME);
let IDADETXT = ENTRADA(NOME + 'QUAL SUA IDADE ?')
let IDADE = parseInt(IDADETXT);
let RESPOSTA = 'N';
if (IDADE < 15) {
    RESPOSTA = ENTRADA('CREIO QUE ESTEJA NO ENSINO FUNDAMENTAL. \nCERTO ? (S/N)')
}
else if (IDADE > 15 && IDADE < 18) {
    RESPOSTA = ENTRADA('CREIO QUE ESTEJA NO ENSINO MEDIO. \nCERTO ? (S/N)')
}
else {
    RESPOSTA = ENTRADA('CREIO QUE ESTEJA NO ENSINO SUPERIOR. \nCERTO ? (S/N)')
}
if (RESPOSTA === 'N') {
    console.log('PELO VISTO NÃO SEI TUDO.');
}
else {
    console.log('ACERTEI NOVAMENTE.');
}
console.log('');
ENTRADA('TCHAU');