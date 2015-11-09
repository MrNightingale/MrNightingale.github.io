/**
 * Created by Solovyov on 07.11.2015.
 * Сделайте то же самое, что в задаче Вывод чисел каждые 100мс, но с использованием рекурсивного setTimeout вместо setInterval.
 */
function printNumbersTimeout() {

    var i = 1;

    var timerId = setTimeout(function go() {

        console.log(i);
        i++;

//        if (i > 20) {
//            clearTimeout(timerId);
//        }
//
//        timerId = setTimeout(go, 100);

        if (i < 21) {
            timerId = setTimeout(go, 100);
        }


    }, 100)

}

console.log(printNumbersTimeout());