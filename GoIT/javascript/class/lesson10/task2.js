/**
 * Created by Solovyov on 28.10.2015.
 * Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.
 */

//function getMaxNumber(arr) {
//    arr.sort(function(a,b) {
//        return a - b;
//    });
//
//    return arr[arr.length-1];
//}

function getMaxNumber(arr) {

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            var firstValue = arr[i+1];
            var secondValue = arr[i];
            arr[i] = firstValue;
            arr[i+1] = secondValue;
        }
    }

    return arr[arr.length - 1];
}

console.log(getMaxNumber([1,30,40,2,7]));

console.log(getMaxNumber([1,15,-20,2,-7]));
