/* 
    <============= JSON, Fetch, keys, values, array add or remove using dots ============>
*/

// 1. JSON ==> sringify and parse

const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

//convert js object to JSON format
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

// Convert JSON format to js Object
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch 
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));


// object keys and values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [1, 4, 53, 63, 64];
numbers.forEach(num => console.log(num));

numbers.map(num => num * 2);

// on array like object: used for of loop
// on Object: used for in lopp


// add or remove from an array

const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

const neProduct = {name: 'webcam', price: 700, brand: 'Lal'};

// copy products array and then add new product
const newProducts = [...products, neProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
