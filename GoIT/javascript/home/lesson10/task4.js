/**
 * Created by Solovyov on 28.10.2015.
 * Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor

 Example string: the quick brown fox

 Expected Output: The Quick Brown Fox
 */

function giveUpperCase(str) {

    var arr = str.split(' ');
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }

    return newArr.join(' ');

}

console.log(giveUpperCase('the quick brown fox'));