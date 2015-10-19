/**
 * Created by Solovyov on 17.10.2015.
 */
var anagrams = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log(anClean(anagrams));

function anClean(arr) {

    var obj = {};
    var newArr;

    for (var i = 0; i < arr.length; i++) {
        newArr = arr[i].toLowerCase().split('').sort().join('');
        obj[newArr] = arr[i];
    }

    var result = [];

    for (var key in obj) {
        result.push(obj[key]);
    }

    return result;

}