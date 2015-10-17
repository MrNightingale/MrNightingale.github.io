/**
 * Created by Solovyov on 17.10.2015.
 */
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

console.log(unique(strings));

function unique(arr) {

    arr.sort();

    var unArr = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] !== arr[i+1]) {
            unArr.push(arr[i]);
        }

    }

    return unArr;

}