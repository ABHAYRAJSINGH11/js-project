// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     // console.log(this.username);       //this is reffering toward global object, it will 
//     console.log(this)                 // not point on the components or variable of the function, so output: Undefined
//     }                                  //if there will be console.log(this), then output:global object
// chai()

// const chai = function () {            //In this type of declaration there will be no effect, means same as above
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {                 //arrow function- dont use Function keyword, instead just () followed with arrow =>{content}
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {         // => function with parameteres
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2       //when written in same line without{}, function automatically return whatever written in it

// const addTwo = (num1, num2) => ( num1 + num2 )    //Instead of one line, you can use- ()

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))

