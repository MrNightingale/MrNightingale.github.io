/**
 * Created by Solovyov on 23.10.2015.
 */
var make_lazy = function () {

    return arguments[0];

};

var add = function (a, b) {
    return a + b;
};

var lazy_sum = make_lazy(add, 2, 3);

console.log(lazy_sum(2, 3));

var double = function (n) {
    return n * 2;
};

var lazy_value = make_lazy(double, 5);

console.log(lazy_value(5));