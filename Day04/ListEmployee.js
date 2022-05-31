import Employee,{Contract} from "./Employee.js";

const emp1 = new Employee('dian','cahya',4500)
const emp2 = new Employee('denis','hari',4000)
const contract = new Contract('anggi','anggraini',5000,[],'Kontrak')
emp1.skill =['postgress','java']
contract.extratime=500
const listEmployee = [emp1,emp2,contract]

const find = listEmployee.filter(el => el.status === 'Kontrak')

console.log(emp1.ToString());
console.log(contract.toString());

const totalGaji = listEmployee.reduce((sum,{salary}) => sum + salary,0)

console.log(totalGaji);