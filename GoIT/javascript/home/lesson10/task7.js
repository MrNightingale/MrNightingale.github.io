/**
 * Created by Solovyov on 28.10.2015.
 * Write a function suffle(arr) to shuffle an array.
 */
//function suffle(arr){
//    for (var i = arr.length-1; i >=0; i--) {
//
//        var randomIndex = Math.floor(Math.random()*(i+1));
//        var itemAtIndex = arr[randomIndex];
//
//        arr[randomIndex] = arr[i];
//        arr[i] = itemAtIndex;
//    }
//    return arr;
//}
//
//var sortArr = [1,2,3,4,5,6,7,8,9];
//
//console.log(suffle(sortArr));
function suffle(arr) {

    var l = arr.length;

    arr.map(function(item, i, arr) {

        var rand = Math.floor(Math.random() * l);
        var itemAtIndex = arr[rand];
        arr[rand] = arr[i];
        arr[i] = itemAtIndex;

    });

    return arr;

}

console.log(suffle([1,2,3,4,5,6,7,8,9]));