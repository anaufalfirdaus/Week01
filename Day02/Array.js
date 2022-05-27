const foods = ['sup','pizza','pasta']
console.log(foods);

if (Array.isArray(foods)) {
    console.log('Foods is array');
}
console.log(foods[1]);

for (let index = 0; index < foods.length; index++) {
    console.log(foods[index]);
}

foods.push('Seblak')
console.log(foods);
foods.pop()
console.log(foods);
foods.unshift('indomie')
console.log(foods);
foods.shift()
console.log(foods);
foods.sort()
console.log(foods);
foods.reverse()
console.log(foods);
console.log(foods.slice(0,2));

const foods1 = ['Snack','bakso']

const concat = foods.concat(foods1)

console.log(concat);