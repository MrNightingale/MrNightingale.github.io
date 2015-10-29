/**
 * Created by Solovyov on 28.10.2015.
 * Write a single function that can be invoked by either


 sum(2,3); //5
 //or
 sum(2)(3); //5
 */
function sum (a,b){

    if (arguments[1] === undefined) {
        return function(b) {
            return a + b;
        }
    } else {
        return a + b;
    }

}

console.log(sum(2,3));

console.log(sum(2)(3));