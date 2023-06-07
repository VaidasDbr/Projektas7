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
if (num1 > num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (num1 < num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (num1 === num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (num1 !== num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (num1 >= num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (num1 <= num2) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
let wor1 = "Ona"; let wor2 = "Petras";
console.log(wor1.length,wor2.length);
if (wor1.length > wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (wor1.length < wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (wor1.length === wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (wor1.length !== wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (wor1.length >= wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (wor1.length <= wor2.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
let arr5 = ["Ona","Ana","Lina","Rasa","Zose","Rita","Roma"];
let arr6 = ["Rimas","Matas","Petras","Lukas","Aras"];
console.log(arr5.length,arr6.length);
if (arr5.length > arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (arr5.length < arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (arr5.length === arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (arr5.length !== arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (arr5.length >= arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}
if (arr5.length <= arr6.length) {console.log("Pomidoras");} else {
console.log("Bandykite kitą kartą.");}


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

let iii = 0;
for (let ii=0; ii<1 ; ii++) {console.log(ii);}
for (let ii=0; ii<5 ; ii++) {iii=iii+ii;} console.log(iii);
for (let ii=0; ii<101 ; ii++) {iii=iii+ii;} console.log(iii);
for (let ii=574; ii<816 ; ii++) {iii=iii+ii;} console.log(iii);
for (let ii=-50; ii<51 ; ii++) {iii=iii+ii;} console.log(iii);
for (let ii=-70; ii<31 ; ii++) {iii=iii+ii;} console.log(iii);

let str1 = ["a","b","c","d","e","f"];
for (let ii=5; ii>-1 ; ii--) {console.log(str1[ii]);}

let str2 = [0,11,8,31,-18,18]
for (let i=0; i<=4 ; i += 2) {
for (let i3=3; i3<=7 ; i3 += 2) {let iii = 0;
for (let ii=str2[i]; ii<=str2[i+1]; ii=ii+i3) {iii++}
console.log("Skaičių intervale tarp "+str2[i]+" ir "+str2[i+1]+", besidalijančių be liekanos iš "+i3+" yra "+iii+" vienetai.");
}}


let masyvas1 = [1,1,1];
let masyvas2 = [1,2,2,3];
let masyvas3 = [5,4,3,2,1];
let masyvas4 = [5,4,3,2,1,1,1,1,1,2,2,3];
let num11=0;let num22=0;let num33=0;let num44=0;let num55=0;
for (let i7=0; i7<masyvas1.length; i7++) {
if (masyvas1[i7] === 1) {num11++;}
if (masyvas1[i7] === 2) {num22++;}
if (masyvas1[i7] === 3) {num33++;}
if (masyvas1[i7] === 4) {num44++;}
if (masyvas1[i7] === 5) {num55++;}}
console.log("masyvas1 turi 1 = "+num11);
console.log("masyvas1 turi 2 = "+num22);
console.log("masyvas1 turi 3 = "+num33);
console.log("masyvas1 turi 4 = "+num44);
console.log("masyvas1 turi 5 = "+num55);
num11=0;num22=0;num33=0;num44=0;num55=0;
for (let i7=0; i7<masyvas2.length; i7++) {
if (masyvas2[i7] === 1) {num11++;}
if (masyvas2[i7] === 2) {num22++;}
if (masyvas2[i7] === 3) {num33++;}
if (masyvas2[i7] === 4) {num44++;}
if (masyvas2[i7] === 5) {num55++;}}
console.log("masyvas2 turi 1 = "+num11);
console.log("masyvas2 turi 2 = "+num22);
console.log("masyvas2 turi 3 = "+num33);
console.log("masyvas2 turi 4 = "+num44);
console.log("masyvas2 turi 5 = "+num55);
num11=0;num22=0;num33=0;num44=0;num55=0;
for (let i7=0; i7<masyvas3.length; i7++) {
if (masyvas3[i7] === 1) {num11++;}
if (masyvas3[i7] === 2) {num22++;}
if (masyvas3[i7] === 3) {num33++;}
if (masyvas3[i7] === 4) {num44++;}
if (masyvas3[i7] === 5) {num55++;}}
console.log("masyvas3 turi 1 = "+num11);
console.log("masyvas3 turi 2 = "+num22);
console.log("masyvas3 turi 3 = "+num33);
console.log("masyvas3 turi 4 = "+num44);
console.log("masyvas3 turi 5 = "+num55);
num11=0;num22=0;num33=0;num44=0;num55=0;
for (let i7=0; i7<masyvas4.length; i7++) {
if (masyvas4[i7] === 1) {num11++;}
if (masyvas4[i7] === 2) {num22++;}
if (masyvas4[i7] === 3) {num33++;}
if (masyvas4[i7] === 4) {num44++;}
if (masyvas4[i7] === 5) {num55++;}}
console.log("masyvas4 turi 1 = "+num11);
console.log("masyvas4 turi 2 = "+num22);
console.log("masyvas4 turi 3 = "+num33);
console.log("masyvas4 turi 4 = "+num44);
console.log("masyvas4 turi 5 = "+num55);