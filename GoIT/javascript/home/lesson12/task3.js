/**
 * Created by Solovyov on 08.11.2015.
 */
var i;
var timer = setInterval(function() { // планируем setInterval каждые 10мс
    i++;
}, 10);

setTimeout(function() { // через 50мс - отмена setInterval
    clearInterval(timer);
    console.log(i); // (*)
}, 50);

// и запускаем тяжёлую функцию
function f() {
    // точное время выполнения не играет роли
    // здесь оно заведомо больше 100мс
    for (i = 0; i < 1e8; i++) f[i % 2] = i;
}

f();