/**
 * Created by Solovyov on 11.11.2015.
 */
function sum(a, b) {
    console.log(a + b);
}

function throttle(func, time) {

    var state = false;
    var ctx, args;

    function wrapper() {

        if (state) {
            ctx = this;
            args = arguments;
            return;
        }

        func.apply(this, arguments);

        state = true;

        setTimeout(function() {

            state = false;

            if (args) {
                wrapper.apply(ctx, args);
                args = ctx = null;
            }

        }, time);

    }

    return wrapper;

}

var f1000 = throttle(sum, 1000);

f1000(1, 2);
f1000(2, 3);
f1000(3, 4);