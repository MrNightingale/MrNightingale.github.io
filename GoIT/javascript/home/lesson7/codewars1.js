/**
 * Created by Solovyov on 22.10.2015.
 */
function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        // use anonymous wrapper to get right value of i
        // http://bonsaiden.github.io/JavaScript-Garden/#function.closures
        (function(e) {
            callbacks.push(function() {
                return e;
            });
        })(i);

    }

    return callbacks;
}

var callback = createFunctions(5);

console.log(callback[4]());