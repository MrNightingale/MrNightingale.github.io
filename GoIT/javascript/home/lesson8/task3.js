/**
 * Created by Solovyov on 25.10.2015.
 */
function User(fullName) {

    this.fullName = fullName;

    Object.defineProperty(this,'firstName', {
        get: function() {
           return fullName.split(' ')[0];
        },
        set: function(value) {
            var arrF = fullName.split(' ');
            arrF[0] = value;
            fullName = arrF.join(' ');
        }
    });

    Object.defineProperty(this,'lastName', {
        get: function() {
            return fullName.split(' ')[1];
        },
        set: function(value) {
            var arrL = fullName.split(' ');
            arrL[1] = value;
            fullName = arrL.join(' ');
        }
    });

}

var vasya = new User('Александр Пушкин');

console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);

vasya.firstName = 'Алексей';
vasya.lastName = 'Толстой';

console.log(vasya.fullName);
console.log(vasya.firstName);
console.log(vasya.lastName);