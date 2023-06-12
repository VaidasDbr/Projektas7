console.clear();

//Jonas: paskutinis pažimys yra 8.
//Maryte: paskutinis pažimys yra 8.
//Petras: paskutinis pažimys yra 7.
//Ona: paskutinis pažimys yra 5.
function studentintro(f1,n1) {
    let n2 = n1.length -1;
    return `${f1}: paskutinis pažimys yra ${n1[n2]}`;
    }
    let stud1 = "Jonas";
    let marks1 = [10,2,8,2,8,2,8];
    let stud2 = "Maryte";
    let marks2 = [10,9,8];
    let stud3 = "Petras";
    let marks3 = [5,6,7];
    let stud4 = "Ona";
    let marks4 = [5,5,5,5,5,5,5,5];
    console.log(studentintro(stud1,marks1));
    console.log(studentintro(stud2,marks2));
    console.log(studentintro(stud3,marks3));
    console.log(studentintro(stud4,marks4));

//uzduotys
//JavaScript mini užduotys
//Kintamųjų inicijavimas

//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
let num = 1; let num2 = 2; let num3 = 3;
console.log(num,num2,num3);

//Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
let word = "Labas"; let word2 = "vakaras"; let word3 = "pasauli";
console.log(word,word2,word3);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

function num11(n1,n2,n3,n4,n5) {
return "\n"+n1+" "+n2+" "+n3+" "+n4+" "+n5;
}
let num4 = num11(1,2,3,4,5); let num5 = num11(6,7,8,9,10);
let num6 = num11(11,12,13,14,15);
console.log(num4,num5,num6);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console

function num10(w1,w2,w3,w4,w5) {
return "\n"+w1+" "+w2+" "+w3+" "+w4+" "+w5;
}
let num7 = num10("Labas1","Labas2","Labas3","Labas4","Labas5");
let num8 = num10("Sveiki1","Sveiki2","Sveiki3","Sveiki4","Sveiki5");
let num9 = num10("Iki1","Iki2","Iki3","Iki4","Iki5");
console.log(num7,num8,num9);


//Veiksmai su kintamaisiais

//Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console

let num12 = 10;
let num13 = 20;
let num14 = num12 + num13;
console.log(num14);

//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//Rezultatą išvesti į console

let num15 = "Labas";
let num16 = "Rytas";
let num17 = num15 + " " + num16;
console.log(num17);

//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console

let num18 = 1-2;
let num19 = 3-4+5;
let num20 = num18 + num19;
console.log(num20);

//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

let num21 = "Labas";
let num22 = "Rytas";
let num23 = num21 + ", " + num22;
console.log(num23);

//Funkcijos

//Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus
//Funkcija pavadinimu “tusciaFunkcija”:
//nepriima jokių kintamųjų
//neatlieka jokios vidinės logikos
//gražina boolean tipo reikšmę “false”
//TESTAS:
//console.log( tusciaFunkcija() );
//rezultatas: false

function tusciaFunkcija() {
return false;
}
console.log( tusciaFunkcija() );

//Funkcija pavadinimu “daugyba”:
//priima du skaičiaus tipo kintamuosius
//atskirame kintamajame įsimena sandaugos reikšmę
//gražina saudaugos rezultatą
//TESTAI:
//console.log( daugyba( skaicius1, skaicius2 ) );
//console.log( daugyba( skaicius3, skaicius2 ) );
//console.log( daugyba( skaicius1, skaicius3 ) );
//rezultatas: teisingos reikšmės;

function daugyba(n1,n2) {
return n1 * n2;
}
let skaicius1 = 10;
let skaicius2 = 20;
let skaicius3 = 30;
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );