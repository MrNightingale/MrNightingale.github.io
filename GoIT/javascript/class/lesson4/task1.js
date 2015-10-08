/**
 * Created by Solovyov on 08.10.2015.
 */
///Recursion
function sumTo(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + sumTo(n-1);
    }
}
sumTo(4);

/* //Cycle
function sumTo(n) {
    var result = n;

    for (var i = 1; i < n; i++) {
        result += n - i;
    }

    return result;
}

sumTo(4);
*/

/* Arythmetic
    function sumTo(n) {
        return n * (n+1) / 2;
    }
    sumTo(10);
 */