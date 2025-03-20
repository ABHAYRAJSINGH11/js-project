// Immediately Invoked Function Expressions (IIFE)
//through IIFE we can call the function at the time of its declaration

// In this the whole function is wrapped inside- ()and followed by this-(), which call the function and arguments can also be passed in it
//the () used for function calling must be ended by-; Otherwise another IIFE will not execute as the prev one would be still running  

(function chai(){              // here functon is properly declared normally and wrapped by () and followed by ();
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {                     // here function is declared without name jus by passing parameter, this way is also valid
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');                    //here argument is passed in function calling
