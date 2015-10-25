function add(a,b) {
    return a + b;
}

function mul(a,b) {
    return a * b;
}

function applyF(binaryFunc) {
    return function(a) {
        return function(b) {
            return binaryFunc(a,b);
        }
    }
}

var addF = applyF(add);

console.log(addF(3)(4));
console.log(applyF(mul)(2)(5));