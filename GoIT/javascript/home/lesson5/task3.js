/**
 * Created by Solovyov on 14.10.2015.
 */
var arr = [];
var enteredValue;

for (var i = 0; ; i++) {

    enteredValue = prompt('Enter number', 'Enter it here');

    if (enteredValue !== null &&
        enteredValue !== '' &&
        typeof +enteredValue === 'number' &&
        !isNaN(+enteredValue)) {

        arr.push(+enteredValue);

    } else {
        break;
    }

}

var resultSum = 0;

arr.forEach(function(item) {
    resultSum += item;
});

console.log(resultSum);