/**
 * Created by Soloviov on 16.11.2015.
 */
function Machine(power) {

    this._power = power;

    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    }

}

function Fridge(power) {

    Machine.apply(this, arguments);

    var food = [];
    var foodMax = power / 100;

    this.addFood = function() {

        if (this._enabled === false) {
            throw new Error('Fridge is not working');
        }

        for (var i = 0; i < arguments.length; i++) {

            if (food.length < foodMax) {

                food.push(arguments[i]);

            } else {

                throw new Error('Fridge is full');

            }

        }

    };

    this.getFood = function () {
        return food.slice();
    };

    this.filterFood = function (func) {
        return food.filter(func);
    };

    this.removeFood = function (item) {

        if (food.indexOf(item) !== -1) {
            food.splice(food.indexOf(item), 1);
        }

    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

fridge.removeFood("нет такой еды");
console.log( fridge.getFood().length );

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

dietItems.forEach(function(item) {
    console.log( item.title ); // сок, зелень
    fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2