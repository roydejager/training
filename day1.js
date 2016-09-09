const assert = require('assert');

function reverseString(str) {
    var string = "";

    for (var i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
}


function isPalindrome(str) {
    var string = str;
    var reverse = reverseString(str);


    return string === reverse;

}

function numIsPalindrome(num) {
    var toString = num.toString();
    var reverse = reverseString(toString);


    return toString === reverse;

}

// test reverse strings
assert(reverseString('test') === 'tset');
assert(reverseString('hello') === 'olleh');
assert(reverseString('onno') === 'onno');
//
// test palindromes
assert(isPalindrome('onno') === true);
assert(isPalindrome('roy') === false);
//
// test number palindromes
assert(numIsPalindrome(1331) === true);
assert(numIsPalindrome(1337) === false);
