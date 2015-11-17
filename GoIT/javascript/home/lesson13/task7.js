/**
 * Created by Soloviov on 11.11.2015.
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
    }

}

var fridge = new Fridge(500);

fridge.enable();
fridge.addFood('salmon');
fridge.addFood('sausage', 'apple juice', 'red wine', 'salad');

var fridgeFood = fridge.getFood();
console.log(fridgeFood);

fridgeFood.push('beer', 'vodka');
console.log(fridge.getFood());