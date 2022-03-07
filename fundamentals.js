/* 
    <============= Six JavaScript Fundamentals that you need to know ============>
*/

// 1. How to declare a variable using let and const

//when think value not changable, that time use const.
const fatherName = 'Shamsul Alam';

// when think, value will be changed, that time use let.
let season = 'rainy';
season = 'winter';


// 2. six(6) basic condition >, <, ===, !==, <=, >=
// multiple conditon: &&, ||

if(fatherName == 'Shamsul Alam' || season === 'rainy'){

}
else if(fatherName === 'Shamsul Alam'){

}
else{

}


// 3. Array decalre
//index
//length, push, pop
const numbers = [23, 53, 53, 63, 33];
numbers[0] = 78;


// 4. for loop
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// 5. function
function multiply(num1, num2){
    const result = num1 + num2;
    return result;
}
const output = multiply(4, 5);
console.log(output);


// 6. Object
// 3 ways to acess property by name
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age';
console.log(student.name); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
