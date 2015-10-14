/**
 * Created by Solovyov on 13.10.2015.
 */
var fruits = ['apple', 'orange'];

fruits.push('kiwi');

fruits[fruits.length-2] = 'pear';

console.log(fruits.shift());

fruits.unshift('apricot', 'peach');

console.log(fruits);
