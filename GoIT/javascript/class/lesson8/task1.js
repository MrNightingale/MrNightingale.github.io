/**
 * Created by Solovyov on 21.10.2015.
 */
var calculator = {

    read: function() {
        this.a = +prompt('First value', '');
        this.b = +prompt('Second value', '');
    },

    sum: function() {
        return this.a + this.b;
    },

    mul: function() {
        return this.a * this.b;
    }

};


calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());