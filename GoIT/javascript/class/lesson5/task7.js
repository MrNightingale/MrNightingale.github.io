/**
 * Created by Solovyov on 13.10.2015.
 */
var array = [0, 3, 5, 6, 43];

function getRandomValue(arr) {
    var max = arr.length-1;
    var rand = Math.floor(Math.random() * (max + 1));

    return arr[rand];
}

console.log(getRandomValue(array));