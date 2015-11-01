/**
 * Created by Solovyov on 01.11.2015.
 * Имеется массив css классов со старницы.

 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по частоте использования (наиболее часто используемые - впереди).

 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.

 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */
function showUnique(arr) {

    var classObj = {};
    var l = arr.length;

    for (var i = 0; i < l; i++) {

        if (classObj[arr[i]]) {

            classObj[arr[i]]++;

        } else {

            classObj[arr[i]] = 1;

        }
        
    }

    var result = [];

    for (var className in classObj) {
        result.push(className);
    }

    result.sort(function(a, b) {
        return classObj[b] - classObj[a];
//       if (classObj[a] > classObj[b]) {
//           return -1;
//       } else if (classObj[a] < classObj[b]) {
//           return 1;
//       } else {
//           return 0;
//       }
    });

    return result;

}

console.log(showUnique(['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link']));