/**
 * Created by Solovyov on 14.10.2015.
 */
function sum() {

    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

sum(1,2,4);