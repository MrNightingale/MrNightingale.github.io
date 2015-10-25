/**
 * Created by Solovyov on 21.10.2015.
 */
function adf(x) {
    return function(y) {
        return x + y;
    }
}

console.log( adf(3)(4) );