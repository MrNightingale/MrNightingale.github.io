/**
 * Created by Solovyov on 28.10.2015.
 * Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor

 Example string: webmaster

 Expected Output: abeemrstw

 Assume punctuation and numbers symbols are not included in the passed string.
 */

function giveAlphabet(str) {

    var arr = str.split('');
    arr.sort();

    return arr.join('');
}

console.log(giveAlphabet('webmaster'));