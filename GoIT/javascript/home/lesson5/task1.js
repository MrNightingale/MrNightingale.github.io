/**
 * Created by Solovyov on 14.10.2015.
 */
var tasksCompleted = {
    'Anna' : 29,
    'Serg' : 35,
    'Elena' : 1,
    'Anton' : 99
};

console.log(getLeader(tasksCompleted));

function getLeader(obj) {

    var arr = [];

    for (var key in obj) {
        arr.push(obj[key]);
    }

    arr.sort(function(a, b) {
        return a - b;
    });

    for (key in obj) {
        if (obj[key] === arr[arr.length - 1]) {
            return key;
        }
    }

}