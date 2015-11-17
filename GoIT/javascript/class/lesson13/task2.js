/**
 * Created by Solovyov on 10.11.2015.
 */
function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готово!');
    }

    this.run = function() {
        timerId = setTimeout(onReady, getBoilTime());
    };

    this.stop = function() {
        clearTimeout(timerId);
    }

}

var coffeeMaker = new CoffeeMachine(4000);

coffeeMaker.run();
coffeeMaker.stop();