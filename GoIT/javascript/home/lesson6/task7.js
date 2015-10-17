/**
 * Created by Solovyov on 17.10.2015.
 */
var anagrams = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
var newArr = anagrams.join().toLowerCase().split(',');

newArr.sort(function (a, b) {
   if (a.length < b.length) {
       return -1;
   }
   if (a.length > b.length) {
       return 1;
   }
   return 0;
});


console.log(newArr);
/*console.log(anClean(anagrams));

function anClean(arr) {

} */