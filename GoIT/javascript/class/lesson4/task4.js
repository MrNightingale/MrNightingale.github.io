/**
 * Created by Solovyov on 08.10.2015.
 */
function upperFirst(string) {
    if (string == '') {
        return '';
    }

    var firstLetter = string[0].toUpperCase();
    var strWithoutFirstLetter = string.substr(1);

    return firstLetter + strWithoutFirstLetter;
}

upperFirst('hello');