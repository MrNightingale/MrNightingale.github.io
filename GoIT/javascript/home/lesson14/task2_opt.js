/**
 * Created by Solovyov on 19.11.2015.
 * Есть реализация часиков на прототипах. Создайте класс, расширяющий её, добавляющий поддержку параметра precision, который будет задавать частоту тика в setInterval. Значение по умолчанию: 1000.

 Для этого класс Clock надо унаследовать. Пишите ваш новый код в файле extended-clock.js.
 Исходный класс Clock менять нельзя.
 Пусть конструктор потомка вызывает конструктор родителя. Это позволит избежать проблем при расширении Clock новыми опциями.
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

function ExtendedClock(options) {

    Clock.apply(this, arguments);

    this._precision = options.precision || 1000;

}

ExtendedClock.prototype = Object.create(Clock.prototype);

ExtendedClock.prototype.constructor = ExtendedClock;

ExtendedClock.prototype.start = function () {

    this._render();
    var self = this;

    this._timer = setInterval(function () {
        self._render()
    }, this._precision);

};

var lowResolutionClock = new ExtendedClock({template: 'h:m:s', precision: 10000});

lowResolutionClock.start();
//lowResolutionClock.stop();