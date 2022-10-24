const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let start;
do {
    start = Number(prompt("Inserisci la posizione iniziale [1 - " + arr.length + "]"));

    if (start < 1 || start > arr.length || isNaN(start)) {
        alert("Valore inserito errato. Inserisci un numero tra 1 e " + arr.length);
    }
} while (start < 1 || start > arr.length || isNaN(start));

let end;
do {
    end = Number(prompt("Inserisci la posizione finale [" + start + " - " + arr.length + "]"));

    if (end < start) {
        alert("Valore inserito errato. Il valore finale non può essere minore di quello iniziale.");
    } else if (end > arr.length || isNaN(end)) {
        alert("Valore inserito errato. Inserisci un numero tra " + start + " e " + arr.length);
    }
} while (end < start || end > arr.length || isNaN(end));

const newArray = rangeArray(arr, start, end);
console.log(newArray);

/**
 * 
 * @param {Array} arr 
 * @param {number} start 
 * @param {number} end 
 */
function rangeArray(arr, start, end) {
    const newArray = [];

    arr.forEach((value, index) => {
        if (index >= start - 1 && index < end) {
            newArray.push(value);
        }
    });

    return newArray;
}