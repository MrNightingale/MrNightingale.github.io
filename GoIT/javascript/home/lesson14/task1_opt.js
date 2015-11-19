/**
 * Created by Solovyov on 19.11.2015.
 * Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
 */

Function.prototype.defer = function(ms) {

    var func = this;

    return function () {

        var args = arguments;
        var ctx = this;

        setTimeout(function () {
            func.apply(ctx, args);
        }, ms)

    };

};

function f(a, b) {
    console.log( a + b );
}

f.defer(1000)(1, 2);
