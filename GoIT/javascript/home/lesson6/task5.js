/**
 * Created by Solovyov on 16.10.2015.
 */
var rose = 'А роза упала на лапу Азора';
var userName = 'Анна';
var word = 'оно';

console.log(isPal(rose));
console.log(isPal(userName));
console.log(isPal(word));

function isPal(string) {

    var lowString = string.toLowerCase();

    var arr = [];

    for (var i = 0; i < lowString.length; i++) {

        if (lowString[i] !== ' ') {
            arr.push(lowString[i]);
        }

    }

    var revArr = arr.slice().reverse();

    for (var j = 0; j < arr.length; j++) {

        if (arr[j] !== revArr[j]) {
            return false;
        }

    }

    return true;

}