stringOne=new String ("   abhay raj jadaun  ")
console.log(stringOne.trim());
console.log(stringOne.toUpperCase());
console.log(stringOne.split(' '));

str1="RAJ"
str2=" JADAUN"
str3=str1.concat(str2)
console.log(str3);

str4=[...str1,...str2]
console.log(str4);
console.log((str4).join(''));  // join k andar('') iska mtlb hai ki array k andar k elements ko join kr do without any gap
                               // agr bas() hota toh bydefaut , se seperate hota- Raj, Jadaun
console.log(stringOne.replace("raj","tar"));
