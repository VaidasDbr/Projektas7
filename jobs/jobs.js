//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą
function nam(n1,n2) {
return n1[0] + "." + n2[0] + "."
}
let nam1 = nam("Pamela","Anderson");
let nam2 = nam("Angelina","Jolie");
console.log(nam1,nam2);

//Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
function nam3(n1,n2,n3) {
return `\nAš esu ${n1} ${n2}. Man yra ${2023-n3}`;
}
let pipl1 = nam3("Vaidas","Vaidulis",1980);
let pipl2 = nam3("Vaidotas","Vaidevicius",1990);
let pipl3 = nam3("Vaidelis","Vaidelinis",2000);
let pipl4 = nam3("Vaidutis","Vaideliukas",1970);
console.log(pipl1,pipl2,pipl3,pipl4);

//Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
function nam4(n1,n2) {
    return [n1.length -1] + "." + n2[0] + "."
    }
    let nam5 = nam4("Pamela","Anderson");
    let nam6 = nam4("Angelina","Jolie");
    console.log(nam5,nam6);

//Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  Rezultatą atspausdinti.

//Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.