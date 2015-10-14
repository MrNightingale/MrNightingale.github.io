/**
 * Created by Solovyov on 14.10.2015.
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

multiplyNumeric(image);

function multiplyNumeric(obj) {

    for (var key in obj) {

        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }

    }

    return obj;

}