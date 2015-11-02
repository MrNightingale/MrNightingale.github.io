/**
 * Created by Solovyov on 01.11.2015.
 */
function work(a, b) {
    console.log(a + b);
}

function makeLogging(f, log) {

    return function () {

        var copyArr = [].slice.call(arguments);
        log.push(copyArr);
        return f.apply(this, arguments);

    };

}

var log = [];
work = makeLogging(work, log);

work(1, 2);
work(4, 5);

for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    console.log('Лог:' + args.join()); // "Лог:1,2", "Лог:4,5"
}