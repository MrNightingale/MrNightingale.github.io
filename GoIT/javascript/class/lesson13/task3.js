/**
 * Created by Solovyov on 10.11.2015.
 */
function Machine(power) {
    this._power = power + ' Ватт';
    this._enabled = false;
    this.enable = function () {
        this._enabled = true;
    };
    this.disable = function () {
        this._enabled = false;
    };

    this.color = 'grey';
}

function CoffeeMachine(power) {

    Machine.apply(this, arguments);

    this.getSettings = function () {
        console.log('Я кофемашина мощностью ' + this._power + '. Состояние: ' +  this._enabled);
    };

    this.color = 'blue';
}

function VintageCM(power) {
    CoffeeMachine.apply(this, arguments);

    this.color = 'brown';
    this.__pedal = 'up';

    this.setPedalStatus = function (direction) {
        if (direction === 'up' || direction === 'down') {
            this.__pedal = direction;
        }
    };

    this.getPedalStatus = function () {
        return 'Состояние педали: ' + this.__pedal;
    };
}

var vintageCoffe = new VintageCM(2000);
vintageCoffe.getSettings();
console.log(vintageCoffe.getPedalStatus());
vintageCoffe.setPedalStatus('down');
console.log(vintageCoffe.getPedalStatus());
console.log(vintageCoffe.color);


function Fridge(power) {
    Machine.apply(this, arguments);

    this.getSettings = function () {
        console.log('Я холодильник! :) мощностью ' + this._power + '. Состояние: ' +  this._enabled);
    }

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.getSettings();

var fridge = new Fridge(10000);
fridge.getSettings();
