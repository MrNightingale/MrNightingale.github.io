/**
 * Created by Solovyov on 24.10.2015.
 *
 */
//Chaining
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        return this.step;
    }
};

console.log(ladder.up().up().down().up().down().down().showStep());