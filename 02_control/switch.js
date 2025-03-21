// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// agar kisi case me break nhi diya toh vo aage ka case bhi execute karega jab tak usko break nhi milta, bas default wala case execute nhi hoga

const month = "march"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// here it shows what if we miss the break


switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
                                       // break not written
    case "april":                      // this case will also execute
        console.log("april");
        break;

    default:                            // if above break is also written or not written, default case will not run  
        console.log("default case match");
        break;
}
// output: march
     //    april

