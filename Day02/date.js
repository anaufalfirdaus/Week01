const today = new Date()
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());

const now = new Date('2021-05-05')
console.log(now);

const now1 = new Date(2021,4,5)
console.log(now1);

const format = new Intl.DateTimeFormat('id-ID').format(today)
console.log(format);

console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());