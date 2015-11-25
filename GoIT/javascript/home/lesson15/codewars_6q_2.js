/**
 * Created by Solovyov on 20.11.2015.
 * You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
 */
// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
    return this.string;
};

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined