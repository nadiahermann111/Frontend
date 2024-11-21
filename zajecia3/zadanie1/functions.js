function isOdd(num) {
    return num % 2 !== 0;
}

const isEven = (num) => num % 2 === 0;


console.log("Czy liczba 1 jest nieparzysta?", isOdd(1));
console.log("Czy liczba 10 jest nieparzysta?", isOdd(10));
console.log("Czy liczba 8 jest parzysta?", isEven(8));
console.log("Czy liczba 3 jest parzysta?", isEven(3));
