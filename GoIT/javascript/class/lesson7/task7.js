/**
 * Created by Solovyov on 21.10.2015.
 */
function identityf(x) {
    return function() {
        return x;
    }
}

var idf = identityf(3);

console.log(idf());