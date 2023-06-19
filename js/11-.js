console.clear();


//if (b % 1 !== 0) {
//    return "Antrasis kintamasis turi būti sveikas skaičius.";
 //}

let user1 = {
    name: "Pamela",
    age: 55,
    isMarried: false,
        child: {
            a0: "0 Child",
        },
};
let user2 = {
    name: "Angelina",
    age: 45,
    isMarried: true,
        child: {
            a1: "Samantha",
            a2: "Sandra",
        },
};
console.log(user1[1,2]);
for (let x in user1) {
    console.log(x, ":", user1[x]);
}
let userKeys = Object.keys(user1);
for (let i=0; i<userKeys.length; i++) {
    console.log(userKeys[i],user1[userKeys[i]]);
}


function check(a,x) {
    for (let i=0; i<a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}
console.log(check([66,101],66));
console.log(check([101,45,75,105,99,107],107));
console.log(check(["t","e","s","t"],"e"));
console.log(check(["what","a","great","kata"],"kat"));

console.log([66,101].includes(66));
console.log([101,45,75,105,99,107].includes(107));
console.log(["t","e","s","t"].includes("e"));
console.log(["what","a","great","kata"].includes("kat"));



//Array.prototype.max = function () {
 //   let res = -Infinity;
 //   for (i=0; i<this.length; i++) {

 //   }
 //   console.log(this);
//}




//console.log(1${pirmas);
//console.log(antras);

let bit = [1,4,[7,[8],9],0];
console.log(bit.flat().flat());//console.log(bit.flat(2));
console.log(bit.join("-"));//console.log(bit.flat().join("-"));
console.log(bit.pop(),bit);//-0
console.log(bit.push(10),bit);//+10
console.log(bit.shift(),bit);//-1
console.log(bit.unshift(0),bit);//+0
console.log(bit.reverse());
console.log(bit.slice(1,3));//console.log(bit.slice(1));
console.log(bit.splice(1,2,"a","b","c"),bit);//delete and include

let mark1 = [1,2,3,4,5];
for (let i=0; i<mark1.length; i++) {
    let mark = mark1[i];
    console.log(mark);
}

let mark2 = [1,2,3,4,5];
for (let mark of mark2) {
    console.log(mark);
}

//for (;;) {
    //console.log(ass);
//}


let des1 = [10,2,8,4,6];
let [a,b,c, ...next] = des1;
console.log(a,b,c,next,des1[0]);


let user3 = {
    name: "Pamela",
    age: 55,
    isMarried: false,
        child: {
            a0: "0 Child",
        },
};
let {name, ...nex} = user3;
console.log(name,nex);
console.log(user3.age);


let user5 = [
    {name: "Pamela", age: 55, isMarried: false},
    {name: "Angelina", age: 45, isMarried: true},
    {name: "Angelina", age: 35, isMarried: false},
];
for (let nam5 of user5) {
    let {name,age,isMarried} = nam5;
    console.log(name,age,isMarried);
}
for (let {name,age,isMarried} of user5) {
    console.log(name,age,isMarried);
}


//game
let num1 = 0;//r
let num2 = 0;//in
for (let i=0; ; i++ ) {
    if (num1 === num2) {
        console.log("Atspėjote skaičius yra:",num1);
    }
    if (num1 > num2) {
        console.log("Per mažas");
    }
    if (num1 < num2) {
        console.log("Per didelis");
    }
break;
}

