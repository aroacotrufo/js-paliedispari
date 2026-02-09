//Esercizio Pari e Dispari

//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5

//Generiamo un numero random (sempre da 1 a 5) per il computer usando una funzione
function numRandom(){                                                               //dichiaro funzione senza parametri
    return  Math.floor(Math.random()*5)+1                                           // genero e restituisco un numero intero random *5-> da 0 a 4, +1-> da 1 a 5
}

//Sommiamo i due numeri
function sum(a,b){                                                                  //dichiaro funzione che somma due parametri 
    return a+b                                                                      //restituisce la somma
}
function isEven(num){                                                               //dichiaro funzione per capire se il numero è pari                                                  
    return num % 2 === 0
}
let sceltaUser = prompt('pari o dispari?')                                          //chiedo all'utente se punta sul pari o dispari
let numUser = parseInt(prompt("Scrivi un numero dall'1 al 5"))                      //chiedo all'utente di scrivere un numero
const numPc =numRandom()                                                            //genera un numero random per il pc usando la funzione
const totale = sum(numPc , numUser)                                                 //somma i due numeri usando la funzione
const result = isEven(totale)                                                       //verifico se il risultato è pari (true) o dispari(false)

console.log(`User: ${numUser}, Computer: ${numPc}, Totale ${totale}(${result})`)    //stampa tutti i dati presi

