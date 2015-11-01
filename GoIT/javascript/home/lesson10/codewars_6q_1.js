/**
 * Created by Solovyov on 31.10.2015.
 * The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an argument to decide how many no. of elements to produce. If the argument is less than or equal to 0 then return empty array

 Example:

 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
 */
function fibonacci(n) {
    var arr = [];
    var a = 0;
    var b = 1;

    if (n <= 0) {

        return arr;

    } else if (n === 1) {

        arr.push(a);
        return arr;

    } else {

        arr.push(a, b);

        for (var i = 3; i <= n; i++) {
            var c = a + b;
            a = b;
            b = c;
            arr.push(b);
        }

    }

    return arr;
}

console.log(fibonacci(4));