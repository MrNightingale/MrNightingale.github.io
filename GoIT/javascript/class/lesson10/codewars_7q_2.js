/**
 * Created by Solovyov on 28.10.2015.
 * Given a string, swap the case for each of the letters.

 e.g. CodEwArs --> cODeWaRS
 */
function swap(str){
    var arr = str.split('');
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i].toUpperCase()) {
            newArr.push(arr[i].toLowerCase());
        } else if (arr[i] === arr[i].toLowerCase()) {
            newArr.push(arr[i].toUpperCase());
        }
    }
    return newArr.join('');
}

console.log(swap('CodEwArs_'));