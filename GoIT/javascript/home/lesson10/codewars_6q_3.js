/**
 * Created by Solovyov on 31.10.2015.
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 */
function solution(number){

    var arr = [];
    var mul3, mul5;

    for (var i = 1; i < number; i++) {

        mul3 = i * 3;
        mul5 = i * 5;

        if (mul3 < number) {
            arr.push(mul3);
        }

        if (mul5 < number) {
            arr.push(mul5);
        }

    }

    var sum = 0;

    arr.sort(function(a, b) {
        return a - b;
    });

    arr.forEach(function(item, index, array) {

        if (array[index] === array[index + 1]) {
            sum += 0;
        } else {
            sum += item;
        }

    });

    return sum;

}

console.log(solution(20));