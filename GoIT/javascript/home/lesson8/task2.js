/**
 * Created by Solovyov on 25.10.2015.
 */
function Calculator() {

    var methods = {

        '+': function(a,b) {
            return a + b;
        },

        '-': function(a,b) {
            return a - b;
        }

    };

    this.calculate = function(str) {

        var arr = str.split(' ');

        var a = +arr[0];
        var b = +arr[2];
        var op = arr[1];

        return methods[op](a,b);
    };


    this.addMethod = function(name, func) {
        methods[name] = func;
    };

}

var calc = new Calculator();

console.log(calc.calculate('1 - 13'));

var powerCalc = new Calculator();

powerCalc.addMethod('*', function(a, b) {
    return a * b;
});

powerCalc.addMethod("/", function(a, b) {
    return a / b;
});

powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

console.log(powerCalc.calculate('2 ** 3'));