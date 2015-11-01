/**
 * Created by Solovyov on 30.10.2015.
 * Given an array, find the duplicates in that array, and return a new array of those duplicates.

 Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).
 */

function duplicates(arr) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    var newArr = [];
    arr.forEach(function(item, index, array) {
        if (array[index] === array[index + 1]) {
            newArr.push(array[index]);
        }
    });
    
    var result = [];
    newArr.forEach(function(item, index, array) {
        if (array[index] !== array[index + 1]) {
            result.push(array[index]);
        }
    });

    return result;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));