/**
 * Created by Solovyov on 20.10.2015.
 */
var value = 0;
function f() {
    if (1) {
        value = true;
    } else {
        var value = false;
    }
    console.log( value );
}
f();
console.log(value);