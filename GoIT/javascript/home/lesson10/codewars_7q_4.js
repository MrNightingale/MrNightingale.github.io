/**
 * Created by Solovyov on 30.10.2015.
 */
function pattern(n) {

    var output = '';

    for (var i = 1; i <= n; i++) {
        if (i >= 10) {
            output += i % 10;
        } else {
            output += i;
        }
    }

    var symbol = '';
    var symbolArr = [];

    for (var j = 1; j < n; j++) {
        symbol += ' ';
        symbolArr.push(symbol);
    }

    symbolArr.reverse();
    var result = '';

    for (var k = 0; k < n; k++) {
        if (k === 0) {
            result += symbolArr[k] + output + '\n';
        } else if (k === n-1) {
            result += output + symbolArr[symbolArr.length-k];
        } else {
            result += symbolArr[k] + output + symbolArr[symbolArr.length-k] + '\n';
        }
    }

    return result;

}

console.log(pattern(3));