/* 
    <============= Array and object Destructuring, optional chaining ============>
*/
// 1. Array Destructuring
const numbers = [44, 53];
// const x = numbers[0]; // old model
// const y = numbers[1];

// const[x, y] = [44, 53];
const [x, y] = numbers;
console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}
// const [first, second] = [45, 50];
const [first, second] = boxify(45, 50);
// console.log(boxify(45, 50));

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const [firstMovie, secondMovie] = student.movies;



//2. Object Destructuring and optional chaining (?)
const { name, age } = { name: 'Abdullah', age: 15 };


const employee = {
    ide: 'VS Code',
    disignation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 67,
        weight: 52,
        address: 'Dhaka',
        drink: 'water',
        watch:{
            color: 'black',
            price: 500,
            brand: 'casio'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const {brand} = employee?.specification?.watch;