/**
 * Created by Solovyov on 28.10.2015.
 * Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor

 Example string: Web Development Tutorial

 Expected Output: Development
 */

function findLongest(str) {

    var arr = str.split(' ');

    arr.sort(function(a,b) {
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        } else {
            return 0;
        }
    });

    return arr[arr.length - 1];

}

console.log(findLongest('Web Development Tutorial'));