/**
 * Created by Solovyov on 14.10.2015.
 */
var string = 'background-color';

toCamelCase(string);

function toCamelCase(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}