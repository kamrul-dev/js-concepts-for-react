/* 
    <============= Array methods map filter find forEach ============>
*/
const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

//1. map(): funciton calls each element of an array and result return a new array
const brands = products.map(product => product.brand);
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);

//2. forEach() : function calls each element of an array but does not return anything
products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

// for multi line
products.forEach(product => {

})

//3. filter(): function calls each element of an array and apply condition then condition satisfied elements will be retuned in a new array
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);

//4. find(): returned matched first element of an array.
const special = products.find(product => product.name.includes('n'));
console.log(special);


