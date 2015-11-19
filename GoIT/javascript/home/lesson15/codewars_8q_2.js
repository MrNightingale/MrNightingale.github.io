/**
 * Created by Solovyov on 17.11.2015.
 * Create a class Ghost

 Ghost objects are instantiated without any arguments.

 Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated

 ghost = new Ghost();
 ghost.color //=> "white" or "yellow" or "purple" or "red"
 */
var Ghost = function() {

    var self = this;

    (function() {
        var value = Math.random();
        if (value < 0.25) {
            self.color = 'white';
        } else if (value > 0.25 && value < 0.5) {
            self.color = 'yellow';
        } else if (value > 0.5 && value < 0.75) {
            self.color = 'purple';
        } else {
            self.color = 'red';
        }
    }());

//    var colors = ['white', "yellow", "purple", "red"];
//    this.color = colors[Math.floor(Math.random() * colors.length)];

};

var ghost = new Ghost();

console.log(ghost.color);