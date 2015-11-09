/**
 * Created by Solovyov on 07.11.2015.
 * Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20, с интервалом между числами 100мс. То есть, весь вывод должен занимать 2000мс, в течение которых каждые 100мс в консоли появляется очередное число.
 */

function printNumbersInterval() {

    var i = 1;

    var timerId = setInterval(function() {

        console.log(i);
        i++;

        if (i > 20) {
            clearInterval(timerId);
        }

    }, 100);

}

console.log(printNumbersInterval());