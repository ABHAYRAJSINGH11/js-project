// const symb= Symbol("ars")
// const obb=new Object()                  // singleton object
// const cars={                            // non-soingleton object
//     name:"honda",
//     speed:200,
//     price:"2 lakh",
//     [symb]:"ars",
//     myArr:[3,4,6,8]
// }
// cars.speed=300
// console.log(cars.speed);
// // Object.freeze(cars)                  //no more updation in object
// cars.speed=400
// console.log(cars.speed);

// console.log(cars[symb]);
// console.log(typeof(cars[symb]));
// console.log(cars["myArr"]);
// console.log(cars.myArr);


// // --------------------------------------------------------------------------------------------------------------------------------------


// cars.bought= function(){
//     console.log(`yes the car, ${this.name}, is sold!` );
    
// }
// console.log(cars.bought());
// console.log(cars.bought);  // output-[Function (anonymous)]



// obj1={
//     name:"jadaun",
//     age:20,
//     height:"175cm"
// }

// obj2={
//     1:123,
//     2:456,
//     3:789
// }
// obj3={...obj1,...obj2} // spread- used to concat two objs
// console.log(obj3);

// const obj4=Object.assign({},obj1,obj2) //Object.assign- same as spread-{} iske andar obj1 aur obj2 jayenge, agr bas obj1 aur obj2 hote toh obj1 k andar obj 2 jata thats why we used an empty object
// console.log(obj4);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX DESTRUCTURE OF OBJECT   XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const cars={                                          // non-singleton object
    name:"honda",
    speed:200,
    price:"2 lakh",
    
    myArr:[3,4,6,8]
    }
 
    const {name:nm}=cars   //keys ko short me use krne k liye kaam aata hai, so that baar baar cars.keys NAA likhna pade
    console.log(nm);
