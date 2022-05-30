const object = {
    firstName : 'Jhon',
    LastName : 'Doe',
    Age : 14
}

console.log(object);

const object1 = new Object({
    firstName : 'Jhon',
    LastName : 'Doe',
    Age : 14
})

console.log(object1);

console.log(Object.keys(object));

//Object.freeze(object)

object.firstName = 'John'
object.LastName = 'Snow'
object.Age = 15

const address = {
    street : 'Limboto 20',
    city : 'bogor'
}

const alamat = {...address,provinsi : 'jawa barat'}

const merge = {...object,...alamat}

console.log(merge);