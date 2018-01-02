const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

const user = {
    name: 'Joe',
    cities: ['Novi', 'Rochester', 'Paderborn'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the numbers have been multiplied
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(number => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());