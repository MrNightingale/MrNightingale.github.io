/**
 * Created by Solovyov on 22.10.2015.
 */
function createFunctions(n) {
    var callbacks = [];
    var j = 0;
    for (var i=0; i<n; i++) {

        callbacks.push(function () {

            return j++;

        });
        console.log(j);
    }

    return callbacks;
}

//var callback = createFunctions(5);

console.log(createFunctions(5)[1]());

/*function createFunctions(n) {
    var callbacks = [];

    return function () {
        for (var i=0; i<n; i++) {
            callbacks.push(function() {

            });
            return i;

        }
    };


}

var callbacks1 = createFunctions(5);

console.log(callbacks1[5]()); */