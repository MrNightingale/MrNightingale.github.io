/**
 * Created by Solovyov on 16.10.2015.
 */
console.log(sum([100, 100, 55]));

function sum(array) {

    return array.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    }, 0);

}