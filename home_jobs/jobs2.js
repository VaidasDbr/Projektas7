console.clear();

//Kintamųjų palyginimas
//Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

//Tarpusavyje palyginti skaičiaus tipo kintamuosius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus
//Išvesti teksto tipo kintamųjų ilgius
//Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus
//Išvesti sąrašo tipo kintamųjų ilgius
//Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
//kuris didesnis
//kuris mažesnis
//ar jie lygūs
//ar jie nelygūs
//kuris didesnis arba lygus
//kuris mažesnis arba lygus

let num1 = 1; let num2 = 2;
if (num1 > num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (num1 < num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (num1 === num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (num1 !== num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (num1 >= num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (num1 <= num2) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
let wor1 = "Ona"; let wor2 = "Petras";
console.log(wor1.length,wor2.length);
if (wor1.length > wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (wor1.length < wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (wor1.length === wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (wor1.length !== wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (wor1.length >= wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (wor1.length <= wor2.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
let arr5 = ["Ona","Ana","Lina","Rasa","Zose","Rita","Roma"];
let arr6 = ["Rimas","Matas","Petras","Lukas","Aras"];
console.log(arr5.length,arr6.length);
if (arr5.length > arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (arr5.length < arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (arr5.length === arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (arr5.length !== arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (arr5.length >= arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}
if (arr5.length <= arr6.length) {
    console.log("Pomidoras");
    } else {
        console.log("Bandykite kitą kartą.");
}


//Ciklo for panaudojimas
//Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//0 … 0
//0 … 4
//0 … 100
//574 … 815
//-50 … 50
//-70 … 30
//panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
//pvz.: “abcdef” -> “fedcba”
//Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
//0 - 11
//8 - 31
//-18 - 18
//rezultatą pateikti tokiu formatu:
//Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
//Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
//Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

function ste(a,b) {
    let iii = 0;
    for (let i=a; i<=b ; i++) {
        iii=iii+i;
    }
    return iii;
}
console.log( ste( 0 , 0 ));
console.log( ste( 0 , 4 ));
console.log( ste( 0 , 100 ));
console.log( ste( 574 , 815 ));
console.log( ste( -50 , 50 ));
console.log( ste( -70 , 30 ));


let str1 = "abcdef";
let str12 = "";
for (let i=str1.length -1; i > -1 ; i--) {
    str12 = str12 + str1[i];
}
console.log(str12);


function int(a,b) {
    for (let i2 = 3; i2 < 8; i2 += 2) {
        let num = 0;
        for (let i = a; i <= b; i++) {
            if (i / i2 % 1 === 0) {
                num++;
            }
        }
        console.log("Skaičių intervale tarp "+a+" ir "+b+", besidalijančių be liekanos iš "+i2+" yra "+num+" vienetai.");
    }
    return "";
}
console.log( int( 0 , 11 ));
console.log( int( 8 , 31 ));
console.log( int( -18 , 18 ));

//Experience

function num(a,b,c,d) {
    for (let ii=1; ii<6; ii++) {
        let nm1 = 0;
        let nm2 = 0;
        let nm3 = 0;
        let nm4 = 0;
        for (let i=0; i<a.length; i++) {
            if (a[i] === ii) {
                nm1++;
            }
        }
        for (let i=0; i<b.length; i++) {
            if (b[i] === ii) {
                nm2++;
            }
        }
        for (let i=0; i<c.length; i++) {
            if (c[i] === ii) {
                nm3++;
            }
        }
        for (let i=0; i<d.length; i++) {
            if (d[i] === ii) {
                nm4++;
            }
        }
        console.log("(masyvas1) "+ii+" yra "+nm1+
        " (masyvas2) "+ii+" yra "+nm2+
        " (masyvas3) "+ii+" yra "+nm3+
        " (masyvas4) "+ii+" yra "+nm4);
    }
    return "";
}
let masyvas1 = [1,1,1];
let masyvas2 = [1,2,2,3];
let masyvas3 = [5,4,3,2,1];
let masyvas4 = [5,4,3,2,1,1,1,1,1,2,2,3];
console.log(num(masyvas1,masyvas2,masyvas3,masyvas4));