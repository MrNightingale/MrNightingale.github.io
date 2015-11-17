/**
 * Created by 47826 on 13.11.2015.
 * Когда кофеварку выключают — текущая варка кофе должна останавливаться.
 */
function CoffeeMachine(power, capacity) {

    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {

        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    function onReady() {
        console.log('Кофе готов!');
    }

    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };

    this._enabled = false;

    this.enable = function() {
        this._enabled = true;
    };

    this.run = function() {

        if (this._enabled === false) {

            throw new Error('Ошибка, кофеварка выключена!');

        }
        this._timerId = setTimeout(onReady, getTimeToBoil());

    };

    this.disable = function() {
        this._enabled = false;
        clearTimeout(this._timerId);
    };
}

var coffeeMachine = new CoffeeMachine(100000, 500);

coffeeMachine.setWaterAmount(200);

coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable();