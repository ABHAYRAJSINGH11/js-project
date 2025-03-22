// ✅ for...in Loop
// Iterates over enumerable properties (keys) of an object, including arrays and objects.

// Outputs keys (not values).

// Works on both objects and arrays, but not on Map or Set.

// ✅ Works on:

// Arrays (keys = indexes)

// Strings (keys = indexes)

// Plain Objects (keys = property names)

// ❌ Does NOT work on:

// Maps

// Sets (because they are not plain objects)

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`); // to only keys- console.log(key), 
}                                                           //to print values- console.log(myObject[key])


for (const i in myObject) {
    // console.log(`${i} shortcut is for ${myObject[i]}`); // Destructured the object- Key=i  
}                                                          


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    
    // console.log(key);                  //In array key= index
    
    // console.log(programming[key]);     //To print values- arrayName[key]         
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {                 //for in loop does not work for map
                                         // output- nothing will come as output
    console.log(key);
}