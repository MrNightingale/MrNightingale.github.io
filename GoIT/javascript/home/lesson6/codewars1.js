/**
 * Created by Solovyov on 16.10.2015.
 */
function getMissingElement(superImportantArray) {
    var newArr = [];

    for (var i = 0; i <= 9; i++) {
        newArr.push(i);
    }

    superImportantArray.sort(function(a, b) {
        return a - b;
    });

    superImportantArray.length = 10;

    for (var j = 0; j < newArr.length; j++) {
        if (superImportantArray[j] !== newArr[j]) {
            return newArr[j];
        }
    }
}

console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]));