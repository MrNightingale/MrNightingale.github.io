/**
 * Created by Solovyov on 01.11.2015.
 * Type checking in JavaScript

 Sometimes it could be a good thing to check if an object is of a type T. Lets see this example:

 function doStuff(thing) {
  return thing.map(function(item) {
    return item * 2;
  });
}
 If we call this function with an array, we get the expected result

 doStuff([1,2,3]) //Array [ 2, 4, 6 ]
 But if someone calls doStuff (ruby do_stuff) with a different type of argument, it will throw an exception, because most likely the argument object won't have a method map defined on it.

 doStuff(3) //TypeError: thing.map is not a function
 Apart from this, having methods like isArray (ruby Typer.is_array? obj), or isString (ruby Typer.is_string? obj) can rise readability when validating input arguments, and clears things up for fellow co-workers.

 Your task will be to create a basic type-checker "framework/api" for JavaScript (or for Ruby). Let's call it typer.js (ruby Typer class). Your API must contain the following methods:

 isNumber (ruby is_number?)
 isString (ruby is_string?)
 isArray (ruby is_array?)
 isFunction (ruby do not implement this)
 isDate (ruby is_time?)
 isRegExp (ruby is_regexp?)
 isBoolean (ruby is_boolean?)
 isError (ruby is_exception?)
 isNull (ruby is_nil?)
 isUndefined (ruby is_nil?)
 Create these utility methods for input validation. For example, if the argument is a number, then isNumber called with this argument should return true.

 Example

 assert.equal(typer.isNumber(5), true);
 assert.equal(typer.isString({}), false);
 Note

 If you are stuck, feel free to check how known utility libraries do the exact same thing. Check them on GitHub ;)

 Motivation

 Possibly after this kata the warriors who just started to learn JavaScript will learn that sometimes the conventional ways of type checking in JavaScript in not sufficient enough, since, for example, not only "simple" numbers are considered as numbers, but numbers created by Number constructors, etc
 */
var typer = (function() {

    return {

        isNumber: function (value) {

            if (isNaN(value)) {

                return false;

            } else if (typeof value === 'number') {

                return true;

            } else if (value instanceof Number) {

                return true;

            } else {

                return false;

            }

        },

        isString: function (value) {

            if (typeof value === 'string') {

                return true;

            } else if (typeof value === 'object') {

                for (var key in value) {

                    if (Array.isArray(value)) {

                        return false;

                    } else if (typeof value[key] === 'string') {

                        return true;

                    } else {

                        return false;

                    }

                }

            } else {

                return false;

            }
        },

        isArray: function (value) {
            return Array.isArray(value);
        },

        isFunction: function (value) {
            return typeof value === 'function';
        },

        isDate: function (value) {
            return value instanceof Date;
        },

        isRegExp: function (value) {
            return value instanceof RegExp;
        },

        isBoolean: function (value) {
            return typeof value === 'boolean' || value instanceof Boolean;
        },

        isError: function (value) {
            return isNaN(value);
        },

        isNull: function (value) {
            return value === null;
        },

        isUndefined: function (value) {
            return value === undefined;
        }

    };
}(null));

console.log('number: ' + typer.isNumber(2));

console.log('string: ' + typer.isString('23'));

console.log('array: ' + typer.isArray([232, '2', true]));

console.log('function: ' + typer.isFunction(function(a,b) {return a - b;}));

console.log('function: ' + typer.isFunction('s'));

console.log('boolean: ' + typer.isBoolean(false));

console.log('undefined: ' + typer.isUndefined(undefined));

console.log('null: ' + typer.isNull(null));

console.log('date: ' + typer.isDate(new Date()));

console.log('RegExp: ' + typer.isRegExp(/ab+c/));