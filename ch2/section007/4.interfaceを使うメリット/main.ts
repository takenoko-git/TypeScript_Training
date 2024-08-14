const getName = (person: {name: string; age: number }) => {
    return person.name
}

const getAge = (person: { name: string; age: number }) => {
    return person.age
}

interface Person {
    name: string
    age: number
}

const getName2 = (person: Person) => {
    return  person.name
}

const getAge2 = (person: Person) => {
    return person.age
}