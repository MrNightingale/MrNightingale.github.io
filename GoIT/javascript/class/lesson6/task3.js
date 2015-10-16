/**
 * Created by Solovyov on 14.10.2015.
 */
var array = [5, 2, 1, -10, 8];

function reverseSort(arr) {

    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}

console.log(reverseSort(array));