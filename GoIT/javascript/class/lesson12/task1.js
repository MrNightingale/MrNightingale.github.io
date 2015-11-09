/**
 * Created by Solovyov on 08.11.2015.
 * Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

 Например:

 function f(x) {
  alert( x );
}

 var f1000 = delay(f, 1000);
 var f1500 = delay(f, 1500);

 f1000("тест"); // выведет "тест" через 1000 миллисекунд
 f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
 Упрощённо можно сказать, что delay возвращает «задержанный на ms» вариант f.

 В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.
 */

function delay(func, time) {

    return function() {
        var args = arguments;
        var ctx = this;

        setTimeout(function () {
            func.apply(ctx, args); // если просто прописать this, arguments, то будет undefined т.к. будет браться контекст из setTimeout callback функции, а нам нужен контекст и аргументы возвращаемой функции.
        }, time);

    }

}

function f(x) {
    console.log('Hello, ' + x);
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000('test');
f1500("test2");

