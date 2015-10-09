/**
 * Created by 47826 on 09.10.2015.
 */
function checkSpam(str) {
    var newStr = str.toLowerCase();
    var prohibitedWord1 = 'sex';
    var prohibitedWord2 = 'spam';

    return (newStr.indexOf(prohibitedWord1) !== -1 ||
            newStr.indexOf(prohibitedWord2) !== -1);
}

checkSpam('get new Sex videos');