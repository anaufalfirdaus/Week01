const  phone = 'tlp:'+62853232123
console.log(phone);

console.log(phone.length);

console.log(phone.charAt(8));

console.log(phone.startsWith('t'));

console.log(phone.endsWith('3'));

console.log(phone.includes('3'));

console.log(phone.indexOf("5"));

console.log(phone.substr(1,3))

const address = `Jl.Danau limboto no.20, babakan madang, bogor ${phone}`

console.log(address);

console.log(address.replace('bogor', 'bandung'));

console.log(address.toLocaleUpperCase());
console.log(address.toLocaleLowerCase());

console.log(address , phone);