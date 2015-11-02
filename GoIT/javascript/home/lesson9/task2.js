/**
 * Created by Solovyov on 01.11.2015.
 * Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.

 Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.
 */

function apllyAll(func) {

    var args = [].slice.call(arguments);
    args.shift();

    return func.apply(null, args);
//    return func.apply(this, [].slice.call(arguments, 1)); - learn.javascript.ru
}

console.log(apllyAll(Math.max, 2, -2, 3));

console.log(apllyAll(Math.min, 2, -2, 3));

function sum() { // суммирует аргументы: sum(1,2,3) = 6
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

console.log(apllyAll(sum, 1, 2, 3));

console.log(apllyAll(mul, 2, 3, 4));