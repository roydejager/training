const assert = require('assert');

function isBalanced(str) {
    var string = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')') {
            string += str[i];
        }
    }

    while (string.match(/\(\)/)) {
        string = string.replace(/\(\)/g, '');
    }

    if (string === '' || string === null) {
        return true
    }
    return false


}

assert(isBalanced('(a)(b)((c))') === true);
assert(isBalanced('(((b))') === false);
assert(isBalanced(')(()') === false);
assert(isBalanced('hello') === true);
