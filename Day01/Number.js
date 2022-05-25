const n = 189.333
console.log(parseFloat(n));
console.log(parseInt(n));

const a = '123.333'
console.log( Number(a));

const b='ada'
console.log(Number(b));

const round = 123.45679
console.log(round.toFixed(3));
console.log(round.toExponential(2));

let formatCurrency = new Intl.NumberFormat('ID',{style:'currency',currency:'IDR'}).format(round)

console.log(formatCurrency);

console.log(isNaN('hello'));
console.log(isNaN('45'));