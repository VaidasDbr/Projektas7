console.clear();
let abc = ["Vaidas","Birute"];
console.log(abc[0],abc[1]);
console.log(abc.length);

function num(n1) {
return n1[0]+n1[1]+[n1[1]];
}
let abc2 = [1,5];
let abc3 = num(abc2);
console.log(abc3);

let abc4 = ["Vaidas","Birute","Paskutinis"];
let abc5 = abc4.length -1;
console.log(abc4[abc5]);

function arr(s1,s2) {
return "\n"+s1[0]+" "+s1[1]+" "+(2023-s1[2]);
//return `\n${w1[0]}.${w2} age ${2023-n1}`;
}
let arr1 = ["Pamela","Anderson",1970];
let arr2 = ["Angelina","Jolie",1980];
let arr3 = arr(arr1,arr2);
console.log(arr3);
