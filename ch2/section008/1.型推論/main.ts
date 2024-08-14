let name = 'Michael Jackson'
name.toUpperCase()

let total = 123

const printTotal: (totalNum: number) => void = (totalNum: number): void => {
    console.log(`Total is ${totalNum}`)
}

printTotal(total)


let isPositive = 0 < total

const printIsPositive: (isPositiveFlag: boolean) => void = (isPositiveFlag: boolean): void => {
    if(isPositiveFlag) {
        console.log(`Total is a positive number`)
    } else {
        console.log('Total is not a positive number')
    }
}

printIsPositive(isPositive)