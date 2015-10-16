/**
 * Created by Solovyov on 16.10.2015.
 */
var object = {
    className: 'open menu menu'
};

function removeClass(obj, cls) {

    var arr = obj.className.split(' ');

    arr.forEach(function(item, i, arr) {

        if (item === cls && arr[i+1] === cls) {
            arr.splice(i, 2);
        }

        if (item === cls) {
            arr.splice(i, 1);
        }

    });

    obj.className = arr.join(' ');

}

console.log(removeClass(object, 'menu'));

console.log(object.className);