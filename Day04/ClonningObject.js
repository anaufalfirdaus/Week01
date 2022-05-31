const employee = {
    firstName : 'John',
    lastName : 'Doe',
    salary : 30000,
    portofolio : {ipk : 3.4, skill : ['java','oracle']}
}

const {firstName,lastName,salary,portofolio:{skill},portofolio:{ipk}} = employee
console.log();

const person = Object.assign(employee)

console.log(person);

const person1 = {...employee}

console.log(person1);