/* 
    <============= (advanced) truthy, false Ternary operator, shortcut and or ============>
*/

/*
    truthy: 'kamrul', 7, true, [], {}

    falsy: 0, '', false, null, undefined 
    
*/

// check truthy
let myVar = 5;
//check any truthy
if (myVar) {
    myVar = myVar*100;
}
else{
    myVar = 0;
}

//check falsy
let myMoney = 50;
// check negative or falsy aything
if(!myMoney){

}


const money = 80;
let food;
if(money> 100){
    food = 'biryani';
}
else{
    food = 'Tea biscuit';
}


// Ternary operator
let food1 = money > 100 ? 'biryani': 'Tea biscuit';
console.log(food1);

let drink = (money> 100 && myVar > 100) ? 'coke': 'filter Water';
console.log(drink);

// shortcut number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);

// string to number
const input = '500';
const inputNum = +input;
console.log(inputNum);


// shortcut ternary for function calling
let isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

// isActive ? showUser() : hideUser();

// using && , if left side is true then right side will be executed
// isActive && showUser();

// use || , if the left side is false then right side will be executed
isActive || hideUser();


// toggle boolean
isActive = !isActive;