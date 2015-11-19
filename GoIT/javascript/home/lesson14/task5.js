/**
 * Created by Solovyov on 19.11.2015.
 * Вы — руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов получил задание создать класс “хомяк” (англ – "Hamster").

 Объекты-хомяки должны иметь массив food для хранения еды и метод found, который добавляет к нему.

 Ниже — его решение. При создании двух хомяков, если поел один — почему-то сытым становится и второй тоже.

 В чём дело? Как поправить?

 function Hamster() {}

 Hamster.prototype.food = []; // пустой "живот"

 Hamster.prototype.found = function(something) {
  this.food.push(something);
};

 // Создаём двух хомяков и кормим первого
 var speedy = new Hamster();
 var lazy = new Hamster();

 speedy.found("яблоко");
 speedy.found("орех");

 alert( speedy.food.length ); // 2
 alert( lazy.food.length ); // 2 (!??)
 */
function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
    this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

console.log( speedy.food.length ); // 2
console.log( lazy.food.length );

//Почему возникает проблема
//
//Давайте подробнее разберем происходящее при вызове speedy.found("яблоко"):
//
//Интерпретатор ищет свойство found в speedy. Но speedy — пустой объект, т.к. new Hamster ничего не делает с this.
//    Интерпретатор идёт по ссылке speedy.__proto__ (==Hamster.prototype) и находят там метод found, запускает его.
//    Значение this устанавливается в объект перед точкой, т.е. в speedy.
//    Для выполнения this.food.push() нужно найти свойство this.food. Оно отсутствует в speedy, но есть в speedy.__proto__.
//    Значение "яблоко" добавляется в speedy.__proto__.food.
//    У всех хомяков общий живот! Или, в терминах JavaScript, свойство food изменяется в прототипе, который является общим для всех объектов-хомяков.
//
//    Заметим, что этой проблемы не было бы при простом присваивании:
//
//    this.food = something;
//В этом случае значение записалось бы в сам объект, без поиска found в прототипе.
//
//    Проблема возникает только со свойствами-объектами в прототипе.
//
//    Для исправления проблемы нужно дать каждому хомяку свой живот. Это можно сделать, присвоив его в конструкторе.