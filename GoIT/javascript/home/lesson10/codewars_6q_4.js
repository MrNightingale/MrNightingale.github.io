/**
 * Created by Solovyov on 31.10.2015.
 * The main idea is to count all the occuring characters(UTF-8) in str. If you have str like this aba then the result should be { 'a': 2, 'b': 1 }

 What if the str is empty ? Then the result should be empty object literal { }
 */
function count (str) {

    if (typeof str === 'string') {

        var obj = {};
        var l = str.length;

        for (var i = 0; i < l; i++) {
            if (obj[str[i]]) {
                obj[str[i]]++;
            } else {
                obj[str[i]] = 1;
            }
//            obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1;
        }

        return obj;

    }

    return {};

}

console.log(count());

console.log(count('abxxxxc_abc'));