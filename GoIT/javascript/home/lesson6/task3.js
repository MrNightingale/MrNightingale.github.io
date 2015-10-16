/**
 * Created by Solovyov on 16.10.2015.
 */
var arr = [1, 2, 3, 4, 5];

arr.sort(function(a, b) {
    if (a < b) {
        return Math.round(Math.random());
    }
    if (a > b) {
        return Math.round(Math.random());
    }
    return Math.round(Math.random());
});

console.log(arr);