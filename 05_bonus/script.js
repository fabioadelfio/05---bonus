/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';
let outputText = ``;

// Dichiara la funzione qui.
const greetUser = (name) => {
    const currentHour = new Date().getHours();
    let greet = ``;

    if(currentHour <= 13) {
        greet = `Buongiorno`;
    } else if(currentHour > 13 && currentHour <= 17) {
        greet = `Buon pomeriggio`;
    } else {
        greet = `Buonasera`;
    }

    outputText = `${greet} ${name}`;

    return outputText;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greetUser(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.