const someStrVal = 123 + '345'
const someNumVal = Number(someStrVal) * 10

interface Person {
    firstName: string
    lastName: string
    age: number
}

const getFullName = (person: Person) => {
    return `${person.firstName} ${person.lastName}`
}

const largeFullName = getFullName({ firstName: 'Michael', lastName: 'Jackson', age: 74 }).toUpperCase();