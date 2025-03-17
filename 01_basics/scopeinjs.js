// in normal fun declaration we can access that funtion from above and lower side of function

// ex1:

// Normal() // function sucessfully called from here
// function Normal(){
//     console.log("this is normal function dec. which can be accessed from anywhere");
    
// }
// Normal() // function sucessfully called from here
// ---------------------------------------------------------------------------------------------------------------

// newFun() //cannot be accessed from here
const newFun= function(){
    console.log("this is another way to dec. function which can be accessed from anywhere");
}
newFun() //can be accessed from here

function one(){
    const username="jadaun"
    console.log("FunctionOne called");
    
    function two(){
        const age=20
        console.log(username);        
    }
    // console.log(age);  //error as its out of scope
    
    two()
    
    
}

one()












