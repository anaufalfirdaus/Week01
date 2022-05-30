const programming = ['java','javascript','python','sql','oracle','postgress','oracle']

console.log(programming.indexOf('oracle'));
console.log(programming.lastIndexOf('oracle'));
console.log(programming.includes('python'));

const nums = [1,5,18,4,22,132]

const num = nums.find(e => e > 10)

console.log(num);