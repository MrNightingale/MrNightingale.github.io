/**
 * Created by 47826 on 12.11.2015.
 * Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady
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

    this.run = function() {
        setTimeout(function() { onReady(); }, getTimeToBoil());
    };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    console.log( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();