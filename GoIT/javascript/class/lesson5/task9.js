/**
 * Created by Solovyov on 14.10.2015.
 */
var array = [5, 7, 4, 8, 3, 0];

var filtered = filterRange(array, 3, 5);

console.log(filtered);

function filterRange(arr, a, b) {

    var newArr = [];

    for (var i = 0; i < arr.length; i++) {

        if(arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }

    }

    return newArr;

}