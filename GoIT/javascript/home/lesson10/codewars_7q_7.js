/**
 * Created by Solovyov on 30.10.2015.
 * You have to create a function named reverseIt.

 Write your function so that in the case a string or a number is passed in as the data , you will return the data in reverse order. If the data is any other type, return it as it is.

 Examples of inputs and subsequent outputs:

 "Hello" -> "olleH"

 "314159" -> "951413"

 [1,2,3] -> [1,2,3]
 */

function reverseIt(data) {

    if (typeof data === 'number') {

        var strNum = '' + data;
        var arrNum = strNum.split('');
        return +arrNum.reverse().join('');

    } else if (typeof data === 'string') {

        var strArr = data.split('');
        return strArr.reverse().join('');

    } else {

        return data;

    }

}

console.log(reverseIt("Hello"));

console.log(reverseIt("314159"));

console.log(reverseIt([1,2,3]));
