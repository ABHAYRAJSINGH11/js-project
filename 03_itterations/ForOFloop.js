// ✅ for...of Loop
// Use it on iterable objects like arrays, strings, maps, sets, and more.

// Cannot be used directly on plain objects because they are not iterable.

// ✅ Works on:

// Arrays

// Strings

// Maps

// Sets

// TypedArrays (like Int8Array, Uint16Array, etc.)

// ❌ Does NOT work on:

// Plain JavaScript Objects ({})

// ["", "", ""]                  //array of strings
// [{}, {}, {}]                  //array of objects

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {              // this prints all the elements of array, means itterate till the length of array
    // console.log(i);
}

const greetings = "Hello world!"    //loop will run for the entire string therefore prints all the letters of string
for (const letter of greetings) {
    // console.log(`Each char is ${letter}`)
}

// Maps
// Maps ek trh ka object hai jiske andar keys aur values set krte hai, iske andar kabhi bhi keys repeat nhi krti, mtlb ki agr 2 same keys aur values likhi hai toh jab ham sari keys ko retrive krenge toh bas ek hii baar retrive hogi jo pehle hogi
// maps ko jab retrive krte hai toh usi order me keys milti hai jisme woh set kri gyin ho map mai 

const map = new Map()                          
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// yaha par 2 baar set kra hai isko ('IN', "India") isiliye jab retrive krenge toh bas ek hii baar retrive hoga

// console.log(map);

for (const [i, j] of map) {
    // console.log(i, ':-', j);   //Destructuring in Loop: for (const [i, j] of map) destructures the key (i) and value (j)
}

const myObject = {                // Objects are not itterable through for Of loops
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
