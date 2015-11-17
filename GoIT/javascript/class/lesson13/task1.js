/**
 * Created by Solovyov on 10.11.2015.
 */
function User() {
    var firstName = '';
    var surname = '';

    this.setFirstName = function(name) {
        firstName = name;
    };

    this.setSurname = function(lastName) {
        surname = lastName;
    };

    this.getFullName = function() {
        return firstName + ' ' + surname;
    };

}

var vasya = new User();

vasya.setFirstName('Vasiliy');
vasya.setSurname('Pupkin');

console.log(vasya.getFullName());