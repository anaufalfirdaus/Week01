const myset = new Set()
myset.add('dian')
myset.add(1)
myset.add('code')

console.log(myset);

myset.delete('dian')

console.log(myset);

const myName = new Set(['dian','vincent','naufal'])

console.log(myName);

const myObj = new Map()
myObj.set(1,'indomie')
myObj.set(2,'sarimi')
myObj.set(3,'sedaap')

const myObj2= new Map([
    [1,'indomie'],
    [2,'sarimi'],
    [3,'sedaap'],
])

console.log(myObj2);
console.log(myObj);

myObj.delete(3)

console.log(myObj);