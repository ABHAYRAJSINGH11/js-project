function addTwoNum(num1,num2){           //num1 and num2 are the parameters here
    return num1+num2
}
console.log(addTwoNum(3,5));              // the values passed to any function are called ARGUMENTS

function calculateCartPrice(...num1){     // here "..." is not spread operator, Its "REST OPERATOR" 
    return num1
}
console.log(calculateCartPrice(3,5,8,6));



const student={
    name:"abhay",
    class:"12th",
    roll:"CS-2341385"
}

function studentData(anyObj) {
    console.log(`${anyObj.name} is the student of class ${anyObj.class} with roll No. ${anyObj.roll}`);
    
}

studentData(student)

studentData({
    name:"Jadaun",
    class:"12th",
    roll:"CS-23541671"
})

const myArr=[122,3,55,778,86]

function returnArrayValue(getArray){
    return getArray[1]
}
console.log(returnArrayValue(myArr));