/**
 * Created by Solovyov on 09.11.2015.
 */
function func1(x) {
    console.log(x);
}

function debounce(func, time) {

    var state = true;

    return function() {

        if(!state) return;

        func.apply(this, arguments);

        state = false;

        setTimeout(function() {
            state = true;
        }, time);

    }

}

var d1000 = debounce(func1, 1000);

d1000(1);
d1000(2);

setTimeout(function () { d1000(3) }, 100);

setTimeout(function () { d1000(4) }, 1100);

setTimeout(function () { d1000(5) }, 1500);

setTimeout(function () { d1000(6) }, 3500);