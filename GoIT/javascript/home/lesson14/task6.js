/**
 * Created by Solovyov on 19.11.2015.
 * Есть реализация часиков, оформленная в виде одной функции-конструктора. У неё есть приватные свойства timer, template и метод render.

 Задача: переписать часы на прототипах. Приватные свойства и методы сделать защищёнными.

 P.S. Часики тикают в браузерной консоли (надо открыть её, чтобы увидеть).
 */
function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) {
        hours = '0' + date.getHours();
    }

    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0' + date.getMinutes();
    }

    var seconds = date.getSeconds();
    if (seconds < 10) {
        seconds = '0' + date.getSeconds();
    }

    var output = this._template.replace('h', hours).replace('m', minutes).replace('s', seconds);

    console.log(output);
};

Clock.prototype.start = function() {
    this._render();
    var self = this;
    this._timer = setInterval(function () {
        self._render()
        }, 1000);
};

Clock.prototype.stop = function () {
    clearInterval(this._timer);
};

var watches = new Clock({template: 'h:m:s'});
watches.start();
watches.stop();