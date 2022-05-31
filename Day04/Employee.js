export default class Employee {
    static totalEmployee = 0

    constructor(firstName,lastName,salary=0,skill=[],status='Permanent'){
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
        this.skill = skill
        this.status = status
        Employee.totalEmployee++
    }
    ToString(){
        return `${this.firstName} ${this.lastName}, Gaji = Rp. ${this.salary}`
    }
}
class Contract extends Employee{
    constructor(firstName,lastName,salary=0,skill=[],status,extratime){
        super(firstName,lastName,salary,skill,status)
        this.extratime = extratime
    }
    toString(){
        return super.ToString()+ ` Status ${this.status}, Extra ${this.extratime}`
    }
}
export {Contract}