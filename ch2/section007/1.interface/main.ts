interface Person {
    name: string
    age: number
}

const person: Person = {
    name: 'Michael Jackson',
    age: 20,
}

// console.log(person.height)

interface Person1 {
    sayHello: (name: string) => void
}

interface Person2 {
    sayHello(name: string): void
}