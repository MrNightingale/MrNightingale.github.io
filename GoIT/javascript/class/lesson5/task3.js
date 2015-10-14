/**
 * Created by Solovyov on 13.10.2015.
 */
var salaries = {
    'junior' : 1000,
    'middle' : 2500,
    'senior' : 3500,
    'lead' : 5000
};

function sumSalary(obj) {
    var result = 0;

    for (var key in obj) {
        result += obj[key];
    }

    return result;
}

console.log(sumSalary(salaries));