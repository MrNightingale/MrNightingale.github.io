/**
 * Created by Solovyov on 25.05.2016.
 * Создать сущности Dog, Cat, Woodpecker, которые являются наследниками сущности Animal. Animal содержит свойства age, name, sound, region и метод say. Dog, Cat, Woodpecker не содержит явно данных свойств, но наследует их у Animal. Также они содержат метод goAway. Задание должно быть реализовано каждым из следующих способов: 1 - прототипное наследование через функции-конструкторы 2 - наследование через конструкцию Object.create()

 Вызвать метод say на каждой из сущностей.

 Реализовать функции getType(), которая принимает один из объектов Dog, Cat, Woodpecker и возвращает его тип не используя оператор instanceof, а проверяя наличие свойств/методов объектов.

 Модифицировать функцию так, что она не принимает объект, а оперирует с объектом this. Функция объявляется вне контекста, но вызывается на определенном объекте при помощи call/apply/bind.
 */
function Animal(age, name, sound, region) {
    this.age = age;
    this.name = name;
    this.sound = sound;
    this.region = region;
}

Animal.prototype.say = function() {
    console.log(this.name + ' says ' + this.sound);
};

function Dog(age, name, sound, region) {
    Animal.apply(this, arguments);
}

function Cat(age, name, sound, region) {
    Animal.apply(this, arguments);
}

function Woodpecker(age, name, sound, region) {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;

Dog.prototype.goAway = function() {
    console.log(this.sound);
};

Cat.prototype.goAway = function() {
    console.log(this.sound);
};

Woodpecker.prototype.goAway = function() {
    console.log(this.sound);
};

var dog = new Dog(2, 'Einstein', 'bow-wow', 'Germany');
var cat = new Cat(3, 'Schrodinger', 'meow', 'Austria');
var woodpecker = new Woodpecker(1, 'Tweety', 'wat?', 'USA');
dog.say();
cat.say();
woodpecker.say();

function getType(obj) {

    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }

}

getType(dog);

function getTypeThis() {

    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            console.log(prop);
        }
    }

}

getTypeThis.call(dog);