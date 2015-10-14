/**
 * Created by Solovyov on 14.10.2015.
 * Создайте функцию find(arr, value), которая ищет в массиве
 arr значение value и возвращает его позицию, если найдено,
 или -1, если не найдено.
 */

var array = [1, 5, 2312, 33];

find(array, 5);

function find(arr, value) {

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == value) {
            return i;
        }

    }

    return -1;

}