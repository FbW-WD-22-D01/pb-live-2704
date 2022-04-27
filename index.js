// Variable definieren und ausgeben
let welcome = "Hallo";
 console.log(welcome);

// neue Variablen definieren und ausgeben
let user = "Sasa";
 console.log(user);

// mehere Variablen ausgeben
 console.log(welcome, user);
 console.log('Guten Morgen: ' + welcome + ' lieber ' + user); //Variablen werden zu einem String und ausgegeben

 let greeting = welcome + ' ' + user; //Beide Variablen werden zu einem String und in einer neuen Variablen gespeichert 
 console.log(greeting);


//bestehender Variable neuen Wert zuweisen
welcome = "Guten Tag"; 
console.log(welcome);


//DATENTYPEN
// string --> beliebige Zeichenketten, müssen in "" oder '' geschrieben werden 
console.log('Hallo ich bin ein String 12 @@ $$$ // &/(§$&)§($/"=');


// number --> Zahlen (-1, 2, 3.5 etc) in Javascript - "Kommazahlen" --> kein Komma sondern Punkt verwenden 1.23
let zahl = 1;
console.log(zahl);


// boolean -->  kennt nur die Werte: true - false
let booli = true;
console.log(booli);

//undefined --> kein Wert, wird von js gesetzt, wenn kein Wert vergeben wurde --> typeof: undefined
let leer;
console.log(leer);

// null -> kein Wert - null muss selbst "von Hand" gesetzt werden --> typeof: object (ein uralter Fehler, der nicht merh korrigiert wird)
let nulli = null;
console.log(nulli);

// Objekt
let userData ={
    user: "Christoph",
    lastname: "Wer",
};
console.log(userData);

// Array
let months = ["Januar", "Februar", "März", 4, 5, true];
console.log(months[5]);


//typeof
console.log(typeof console);
//Achtung!! typeof null --> object



// SONSTIGES
// mehrere Variablen in einer Zeile definieren
let eins="eins", zwei="zwei", drei="drei", vier="vier";
console.log(eins, zwei, drei, vier);