const userEmail = []

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {       // checking if array is empty or not
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   // object ki keys array me convert krne k liye function hote hai-Object.keys(obj name)fir .length use kra hai to find out array is empty or not
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// iss operator se ham check krte hai ki kahi null ya undefined value to nhi hai, agr ho to usko doosri value assign kr dete hai

let val1;
// val1 = 5 ?? 10              
// val1 = null ?? 10           // null hai thats why 2nd value jaygi val1 me
// val1 = undefined ?? 15      // same yaha nhi undefined hai, so val1=15
// val1 = null ?? 10 ?? 20     // pehla null hai to vo toh hogi nhi val1 ki value isiliye iske baad pehle jo bhi case aayga jiski value null ya undefined na ho woh chala jayga val1 mai



console.log(val1);

// Terniary Operator
// ye operator check krta hai condition true hai ya nhi or uske acc. true:false code execute krta hai

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// upar true k liye "less than 80" tha aur false k liye "more than 80"