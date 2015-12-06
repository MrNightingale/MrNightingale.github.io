/**
 * Created by Solovyov on 20.11.2015.
 */
function construct(Class) {
    var newObj = Object.create(Class.prototype);
    var argArr = Array.prototype.slice.call(arguments, 1);
    Class.apply(newObj, argArr);
    return newObj;
}