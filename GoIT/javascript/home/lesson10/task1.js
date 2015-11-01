/**
 * Created by Solovyov on 28.10.2015.
 * Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк. Написать метод extractNumber или extractString, который будет возвращать массив.
 */
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};

obj.extractNumber = function() {
    var arrNum = [];
    for (var key in obj) {
        if (typeof obj[key] === 'number') {
            arrNum.push(obj[key]);
        }
    }
    return arrNum;
};

obj.extractString = function() {
    var arrStr = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
            arrStr.push(obj[key]);
        }
    }
    return arrStr;
};

console.log(obj.extractNumber());

console.log(obj.extractString());