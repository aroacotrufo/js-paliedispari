//chiedere all'utente di inserire una parola 
let word = prompt('Scrivi una parola')

//creare una funzione per capire se la parola inserita è palindroma
function isPalindrome(word){                                    //dichiaro funzione
    /* const  lower = word.toLowerCase()  */                    // se mi serve trasfrormare la parola tutto in minuscolo
    const reversed = word.split('').reverse().join('')          //.split() trasfroma la stringa in un array di singole lettere 
                                                                //.reverse() inverte l'ordine degli elementi 
                                                                //.join() riunisce l'array in un'unica stringa
    return word === reversed                                    //confronta la prima stringa (word) con la versione invertita (reversed)
}
console.log(isPalindrome(word))                                 //stampa il risultato true o false

