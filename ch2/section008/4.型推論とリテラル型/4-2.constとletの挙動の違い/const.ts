const name1 = 'Michael Jackson'
const name2 = 'Steive Wonder'

const sayHelloToMichael = (personName: 'Michael Jackson') => {
    console.log(`Hello, ${personName}`)
}

sayHelloToMichael(name1)
// sayHelloToMichael(name2)

const person = {
    name: 'Michael Jackson'
}

// sayHelloToMichael(person.name)