/**
 * Created by Solovyov on 13.10.2015.
 */
function showNewItem(arr, elem) {
    arr.push(elem);
    return arr;
}

console.log(showNewItem([1, 4, 6], 'goit'));