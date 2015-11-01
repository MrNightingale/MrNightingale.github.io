///**
// * Created by Solovyov on 30.10.2015.
// * This kata is all about adding numbers.
//
// You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
//
// Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
//
// add(3,4,5);
// /*
// returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
// */
//Remember the function will return 0 if no arguments are passed.
// */

function add() {

    var sum = 0;

    if (arguments[0] === undefined) { // function will work correct without this part of the code - no parameters - return sum which equals zero.

        return 0;

    } else {

        for (var i = 0; i < arguments.length; i++) {

            sum += arguments[i] * (i + 1);

        }

        return sum;

    }

}
console.log(add());

console.log(add(3, 4, 5));