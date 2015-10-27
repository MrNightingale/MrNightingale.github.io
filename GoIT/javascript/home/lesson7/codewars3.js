/**
 * Created by Solovyov on 23.10.2015.
 */
var make_lazy = function () {

    var args = [].slice.call(arguments);

    var operation = args.shift();

    return function() {
        return operation.apply(this, args);
    };

};

var add = function (a, b) {
    return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);

console.log(lazy_sum());

var double = function (n) {
    return n * 2;
};

var lazy_value = make_lazy(double, 5);

console.log(lazy_value());