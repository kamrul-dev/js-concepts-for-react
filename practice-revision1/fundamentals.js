/* 
    ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
*/
// when we think that we do not have to change the value, that time we will use const variable
const motherName = 'Hafiza'; // const : redeclare and reassign is not possible

// when we think that we have to change the value in future that time we will use the let variable
let myPhone = 'Samsung'; // let: reassign is possible , redeclare is not possible
myPhone = 'iphone'



/* 
    ২.১ কিভাবে কন্ডিশন লিখতে হয়, ছয় রকমের কন্ডিশন (>, <, ===, !==, >=. <=) কোনটা কোন জিনিসের জন্য ইউজ করবে। এছাড়াও && বা ।। দিয়ে কিভাবে একাধিক কন্ডিশন এর মধ্যে দুইটাই ফুলফিল করতে হবে আবার দুইটার যেকোন একটা ফুলফিল করতে হবে, সেটা কিভাবে করবে.
*/
const a = 5;
const b = 7;
if(a > b || b > a){
    console.log("a is greater than b")
}
else{
    console.log("a is not grater than b");
}


const p = 1;
const q = 3;
if(p < q && q > p){
    console.log("Both condition is true");
}
else{
    console.log("Both condition is not true");
}

if(a === b){
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b")
}


if(a !== b){
    console.log("a is equal to b");
}
else{
    console.log("a is not equal to b")
}


/* 
    ২.২. এক বা একাধিক কন্ডিশন দিয়ে কিভাবে if-else লিখে আবার কখন if-else-if - else লিখে। সেই রকম একটা উদারহণ চিন্তা করে তুমি লিখে ফেলো
*/

const name = 'kamrul';
const age = 24;
if(name && age){
    console.log("I am Kamrul")
}
else if(!name || age){
    console.log('I am not kamrul')
}
else{
    console.log("adress not found");
}