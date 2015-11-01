/**
 * Created by Solovyov on 31.10.2015.
 * A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

 Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 */
function isPangram(string){

    var strArr = string.toLowerCase().split('');
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphArr = alphabet.split('');

    for (var i = 0; i < alphArr.length; i++) {
        for (var j = 0; j < strArr.length; j++) {

            if (alphArr[i] === strArr[j]) {
                break;
            }

            if (j === strArr.length - 1) {
                if (alphArr[i] !== strArr[j]) {
                    return false;
                }
            }

        }
    }

    return true;
//    // codewars solution
//    string = string.toLowerCase();
//    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//        return string.indexOf(x) !== -1;
//    });

}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

console.log(isPangram("The fast brown fox jumps over the lazy dog"));