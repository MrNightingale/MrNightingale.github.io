var array = [5, 2, 1, -10, 8];

function reverseSort(arr) {

    arr.sort(function(a, b) {
        return b - a;
    });

    return arr;
}

console.log(reverseSort(array));