/**
 * Created by Solovyov on 19.11.2015.
 * Есть функция Menu, которая получает аргументы в виде объекта options:

 options содержит настройки меню: width, height и т.п.

function Menu(options) {
...
}
Ряд опций должны иметь значение по умолчанию. Мы могли бы проставить их напрямую в объекте options:

    function Menu(options) {
        options.width = options.width || 300; // по умолчанию ширина 300
    ...
    }
…Но такие изменения могут привести к непредвиденным результатам, т.к. объект options может быть повторно использован во внешнем коде. Он передается в Menu для того, чтобы параметры из него читали, а не писали.

    Один из способов безопасно назначить значения по умолчанию — скопировать все свойства options в локальные переменные и затем уже менять. Другой способ — клонировать options путём копирования всех свойств из него в новый объект, который уже изменяется.

    При помощи наследования и Object.create предложите третий способ, который позволяет избежать копирования объекта и не требует новых переменных.
 */

var option = {
    height: 480
};

function Menu(options) {
    options = Object.create(options);
    options.width = options.width || 640;
    
    console.log(options.width);
    console.log(options.height);
}

Menu.prototype = option;

var option1 = new Menu(option);