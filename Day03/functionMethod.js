const nums = [1,2,3,4,5,6]
const multiple = nums.map(e => e * 5)

console.log(multiple);

const programming = ['java','javascript','python','sql','oracle','postgress','oracle']

const db = programming.filter(e => e.startsWith('ora'))

console.log(db);