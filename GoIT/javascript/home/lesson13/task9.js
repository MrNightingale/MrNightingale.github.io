/**
 * Created by Soloviov on 16.11.2015.
 * Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.
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

    this.disable = function () {
        if (food[0] !== undefined) {
            throw new Error('There is food in the fridge');
        } else {
            this._enabled = false;
        }
    };

//    var parentDisable = this.disable;
//    this.disable = function() {
//        if (food.length) {
//            throw new Error("Нельзя выключить: внутри еда");
//        }
//        parentDisable();
//    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable();