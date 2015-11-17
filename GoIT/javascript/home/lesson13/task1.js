/**
 * Created by 47826 on 12.11.2015.
 */
function CoffeeMachine(power, capacity) {

    var waterAmount = 0;

    this.getPower = function() {
        return power;
    };

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

}

var coffee = new CoffeeMachine(100, 1000);

coffee.setWaterAmount(500);
console.log(coffee.getWaterAmount());
console.log(coffee.getPower());