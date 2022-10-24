const array1 = ['a', 'b', 'c', 'd', 'e'];
const array2 = [1, 2, 3, 4, 5];
console.log(array1);
console.log(array2);

if (array1.length === array2.length) {
    const arrayConcat = concatMoreArrays(array1, array2);
    console.log(arrayConcat);
}

function concatMoreArrays(arr1, arr2) {
    const newArray = [];

    for (let i = 0; i < arr1.length; i++) {
        newArray.push(arr1[i]);
        newArray.push(arr2[i]);
    }

    return newArray;
}