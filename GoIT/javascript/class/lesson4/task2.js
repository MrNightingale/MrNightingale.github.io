/**
 * Created by Solovyov on 08.10.2015.
 */
function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

factorial(3);