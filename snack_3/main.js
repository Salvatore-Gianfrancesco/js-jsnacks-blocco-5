const word = prompt("Inserisci una stringa di testo");
// console.log(word);

const wordReversed = reverseWord(word);

console.log("Stringa originale:", word);
console.log("Stringa ruotata:", wordReversed);

function reverseWord(word) {
    word = word.split('');
    word = word.reverse();
    word = word.join('');

    return word;
}