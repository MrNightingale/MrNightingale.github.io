/**
 * Created by Solovyov on 20.11.2015.
 */
function NamedOne(first, last) {
    this.firstName = first;
    this.lastName = last;


    Object.defineProperty(this, "fullName", {

        set: function(name) {

            var nameArr = name.split(' ');

            if (nameArr.length === 2) {
                this.firstName = nameArr[0];

                this.lastName = nameArr[1];
            }

        },

        get: function() {
            return this.firstName + ' ' + this.lastName;
        }

    });

}

var user = new NamedOne('John', 'Doe');

console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);

user.firstName = 'Bill';
user.lastName = 'Tornton';

console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);

user.fullName = 'Morgan Freeman';

console.log(user.fullName);
console.log(user.firstName);
console.log(user.lastName);