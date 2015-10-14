/**
 * Created by Solovyov on 14.10.2015.
 */
var object = {
    className: 'open menu'
};

addClass(object, 'new');

function addClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            return obj;
        }
    }

    obj.className += ' ' + cls;
    return obj;
}