/* 
    <============= template string, arrow function, spread operator ============>
*/

const numbers = [23, 53, 53, 63, 33];
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// 1. template string
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[3]} also liked movies  ${student.movies[0]}`;
console.log(about)

// 2. arrow function
const getFityFive = () => 55; // arrow function without parameter and single line
const addSixtyFive = num => num + 65; // arrow function with single parameter and single line
const isEvent = x => x % 2 == 0; // arrow function with single parameter and single line
const addThree = (x, y, z) => x + y + z; // arrow function with multiple parameter single line
const doMath = (num1, num2) =>{ // arrow function with mutiple parameter and multiple line
    const sum = num1 + num2;
    return sum;
}

// 3. spread operator
const newNumbers = [...numbers];

//create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
