const ENTRADA = require('prompt-sync')();
console.log('OI');
let NOME = ENTRADA('DIGITE O NOME - ');
console.log('OI ' + NOME);
let IDADETXT = ENTRADA(NOME + 'QUAL SUA IDADE ?')
let IDADE = parseInt(IDADETXT);
let RESPOSTA = 'N';
if (IDADE < 15) {
    RESPOSTA = ENTRADA('\n(S/N)')
}
else if (IDADE > 15 && IDADE < 18) {
    RESPOSTA = ENTRADA('\n(S/N)')
}
else {
    RESPOSTA = ENTRADA('\n(S/N)')
}
if (RESPOSTA === 'N') {
    console.log('');
}
else {
    console.log('');
}
console.log('');
ENTRADA('TCHAU');