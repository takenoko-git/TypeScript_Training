interface SayHello {
    (name: string): void
}

const sayHello: SayHello = (name: string) => {
    console.log(`Hello, ${name}!`)
}