/**
 * Created by Solovyov on 19.11.2015.
 * Добавьте всем функциям в прототип метод defer(ms), который откладывает вызов функции на ms миллисекунд.

 После этого должен работать такой код:
 */
Function.prototype.defer = function (ms) {
    return setTimeout(this, ms);
};

function f() {
    console.log( "привет" );
}

f.defer(1000);