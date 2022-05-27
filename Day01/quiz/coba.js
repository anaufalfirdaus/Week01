const then = new Date('2022-01-24');
const now = new Date();

console.log(then.getDate());
console.log(now.getTime());

const msBetweenDates = Math.abs(then.getTime() - now.getTime());
console.log(msBetweenDates);
if (then >= now) {
    return true
}
if (then <= now) {
    return false
}

const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);

console.log(hoursBetweenDates);