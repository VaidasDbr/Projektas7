console.clear();

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
};
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
    
function daugyba(a,b) {
    if (typeof a !== "number" || !isFinite(a) || 
        typeof b !== "number" || !isFinite(b)) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    let san=a*b;
    return san;
}
let skaicius1=1;let skaicius2=2;let skaicius3=3;
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

//Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
//priima vieną kintamąjį
//jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//priešingu atveju, funkcija tęsia darbą
//į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
//gražina skaitmenų kiekį
//TESTAI:
//console.log( skaitmenuKiekisSkaiciuje( 5 ) );
//rezultatas: 1
//console.log( skaitmenuKiekisSkaiciuje( 781 ) );
//rezultatas: 3
//console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
//rezultatas: 11
//console.log( skaitmenuKiekisSkaiciuje( true ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
    
function skaitmenuKiekisSkaiciuje(a) {
    if (typeof a !== "number" || !isFinite(a)) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    let aa = ""+a;
    aa = aa.replace(".","");
    aa = aa.length;
    if (a<0) {
        aa--;
    }
        return aa;
}
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( "asd" ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
//Experience
console.log( skaitmenuKiekisSkaiciuje( -5 ) );
console.log( skaitmenuKiekisSkaiciuje( -3.14 ) );

//Funkcija pavadinimu “didziausiasSkaiciusSarase”:
//priima vieną kintamąjį
//jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
//priešingu atveju, funkcija tęsia darbą
//pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
//gražina didžiausią surastą skaičių
//TESTAI:
//console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
//rezultatas: 1
//console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
//rezultatas: 3
//console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
//rezultatas: 78
//console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
//rezultatas: 69
//console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
//rezultatas: -1
//console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
//console.log( didziausiasSkaiciusSarase( [] ) );
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”
    
function didziausiasSkaiciusSarase(a) {
    if (!Array.isArray(a)) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if (a.length <= 0) {
        return "Pateiktas sąrašas negali būti tuščias.";
    }
    let big1 = "";
    let big2 = 0;
    for (let i=0; i<a.length; i++) {
        if (typeof a[i] === "number" && isFinite(a[i])) {
            if (big2 === 0) {
                big1 = a[i] ; big2 = 1;
            }
            if (big1 < a[i]) {
                big1 = a[i];
            } 
        }
    }
    if (big1 === "") {
        return "Reikalingas skaičius";
    }
    return big1;
}
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( "pomidoras" ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( ) );
//Experience
console.log( didziausiasSkaiciusSarase( [ "agurkas" ] ) );
console.log( didziausiasSkaiciusSarase( [ 5 ,"agurkas" , 10 ] ) );
console.log( didziausiasSkaiciusSarase( [ Infinity , 10 , Object , 20 ] ) );
console.log( didziausiasSkaiciusSarase( [ NaN , -20 , NaN , 3.14 , 3] ) );
console.log( didziausiasSkaiciusSarase( [ -5 , "A" , 55 , "b" , null , 80 ] ) );


//Funkcija pavadinimu “isrinktiRaides”:
//priima du kintamuosius:
//pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
//antrasis nurodo kas kelintą raidę išrinkti
//patikrinti, ar pirmasis kintamasis yra teksto tipo:
//jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
//priešingu atveju tęsiame darbą
//patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
//jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
//priešingu atveju tęsiame darbą
//patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
//jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
//priešingu atveju tęsiame darbą
//patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
//jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
//priešingu atveju tęsiame darbą
//patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
//jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//priešingu atveju tęsiame darbą
//išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
//išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
//gražina rezultatą
//TESTAI:
//console.log( isrinktiRaides( “abcdefg”, 2 ) );
//rezultatas: “bdf”
//console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
//rezultatas: “cfil”
//console.log( isrinktiRaides( “abc”, 0 ) );
//rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
//console.log( isrinktiRaides( “abc”, 4 ) );
//rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
//console.log( isrinktiRaides( 1561, 2 ) );
//rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
    
function isrinktiRaides(a,b) {
    if (typeof a !== "string") { 
       if (typeof b !== "number" || !isFinite(b)) {
            return "Pirmasis ir antrasis kintamasis yra netinkamo tipo.";
        }
    }
    if (typeof a !== "string") {
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if (a.length <= 0 || a.length >= 100) {
        if (typeof b !== "number" || !isFinite(b)) {
        return "Pirmasis kintamasis netinkamo dydžio, antrasis kintamasis netinkamo tipo.";
        }
    }
    if (a.length === 0 || a.length >= 100) {
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }
    if (typeof b !== "number" || !isFinite(b)) {
        return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if (b === 0) {
        return "Antrasis kintamasis turi būti didesnis už nulį.";
    }
    if (b > a.length) {
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
    }
    if (b % 1 !== 0) {
       return "Antrasis kintamasis turi būti sveikas skaičius.";
    }
    if (b < 0) {
        let str = "";
        for (let i=a.length + b; i > -1; i += b) {
            str = str+a[i];
        }
        return str;  
    }
    let str="";
    for (let i=b-1; i<a.length; i += b) {
        str = str+a[i];
    }
    return str;
}
console.log( isrinktiRaides( "abcdefg" , 2 ) );
console.log( isrinktiRaides( "abcdefghijkl" , 3 ) );
console.log( isrinktiRaides( "abcdefghijkl" , -3 ) );
console.log( isrinktiRaides( "abcdefghijkl" , -5 ) );
console.log( isrinktiRaides( "abc" , 0 ) );
console.log( isrinktiRaides( "abc" , 4 ) );
console.log( isrinktiRaides( 1561 , 2 ) );
//Bonus stage
console.log( isrinktiRaides( "" , 1 ) );
console.log( isrinktiRaides( "abcdef" , 3.14 ) );
//Experience
console.log( isrinktiRaides( [ "abc" , 1 ] ) );
console.log( isrinktiRaides( Infinity , Infinity ));
console.log( isrinktiRaides( NaN , NaN ));
console.log( isrinktiRaides( null , null ));
console.log( isrinktiRaides( Array , Array ));
console.log( isrinktiRaides( "abc" , "abc" ));
console.log( isrinktiRaides( "" , "" ));
console.log( isrinktiRaides( ));
    
//Funkcija pavadinimu “dalyba”:
//turi priimti du kintamuosius
//reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
//esant blogoms sąlygoms, išvesti atitinkamą pranešimą
//esant geroms - tęsti darbą
//į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
//daliname pirmąjį skaičių iš antrojo
//grąžinti suskaičiuotą reikšmę
//TESTAI:
//sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
    
function dalyba(a,b) {
    if (typeof a !== "number" || !isFinite(a)) {
        if (typeof b !== "number" || !isFinite(b)) {
        return "Abu kintamieji netinkamo tipo.";
        }    
    }
    if (typeof a !== "number" || !isFinite(a)) {
        return "Pirmasis kintamasis netinkamo tipo.";
    }
    if (typeof b !== "number" || !isFinite(b)) {
        return "Antrasis kintamasis netinkamo tipo.";
    }
    let dal=a/b;
    if (typeof dal !== "number" || !isFinite(dal)) {
        return "Netinkamai apskaičiuota reikšmė.";
    }
    return dal;
}
console.log( dalyba( 10 , 5 ));
console.log( dalyba());
console.log( dalyba( "5" + 5 ));
console.log( dalyba( [ 5 , 5 ] ));
console.log( dalyba( +5 , !+5 ));
console.log( dalyba( "number" , 5 ));
console.log( dalyba( {} , ~50 ));
console.log( dalyba( "" , "" ) );
console.log( dalyba( [  ,] , [ ] ) );
console.log( dalyba( { } , { } ) );
console.log( dalyba( 5 ) );
console.log( dalyba( "a" ) );
console.log( dalyba( !5 , !5 ) );
console.log( dalyba( [ 5 ] , [ 5 ] ) );
console.log( dalyba( "5" , "5" ) );
console.log( dalyba( 5 + "5" , "5" + 5 ) );
console.log( dalyba( false , false ) );
console.log( dalyba( true , true ) );
console.log( dalyba( Number , Number ) );
console.log( dalyba( NaN , NaN ) );
console.log( dalyba( Infinity , Infinity ) );
console.log( dalyba( Symbol , Symbol ) );
console.log( dalyba( undefined , undefined ) );
console.log( dalyba( function name(params) {} ) );
console.log( dalyba( Function , Function ) );
console.log( dalyba( BigInt , BigInt ) );
console.log( dalyba( null , null ) );
console.log( dalyba( 5 == 5 , 5 == 5 ) );
//Experience
console.log( dalyba( 5 - `5`, `5` - 5 ) );
console.log( dalyba( ~5 - ~5 , ~5 - ~5 ) );
console.log( dalyba( 5 ^ 5 , 5 ^ 5 ) );
console.log( dalyba( 5 - [ 5 ] , [ 5 ] - 5 ) );