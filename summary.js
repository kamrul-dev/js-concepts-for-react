/* 
fundamentals
    1.1 variable (let ,const) three types of variable
    1.2 conditon (<, >, ===, !==, <=, >=) &&, ||, if-else, if - else if - else
    1.3 array:  declare, length, index, push, pop, indexOf, includes
    1.4 for loop, while loop
    1.5 function return parameter
    1.6 Object property, including array, object

    =============================
    ES6
    1. template string ${}
    2. spread(...) 
    2.1 copy an array then add a new element to and array
    2.2 use filter to remove an element from and array
    3.  Arrow function
    3.1 no parameter ()
    3.2 single parameter
    3.3 multiple parameters()
    3.4 multiline arrow function
    4.  Destructuring : object destructuring , array destructuring
    5. Object declaration shorthand
    6. function parameter default value
    7. Optional chaining (?.)

    ================================
    Browser API
    1. Local storage session storage
    2. local API
    3. History API
    4. fetch
    ===============================
    
    Others
    1. array: map, forEach, filter, find
    2. ternary operator
    3. logical and logical or  (&& , ||)
    4. JSON(Stringify, parse)
    5. +, '', (shorcut number and string convert)

*/

//Object shorthand
const x = 50;
const y = 100;
const obj = {
    x: x, y: y
};

//shortcut
const obj1 = { x, y };

const name = 'kamrul';
const area = 'Dhaka';

const address = {
    name: name,
    area: area
}
//shortcut
const address2 = { name, area }