/**
 * Created by 47826 on 08.10.2015.
 */
function pow(x, n) {
    var result = x;

    for (var i = 0; i < n - 1; i++) {
        result *= x;
    }

    return result;
}

pow(3, 3);