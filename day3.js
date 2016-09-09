const assert = require('assert');

function stringToArray(str) {
    var array = [];

    for (var i = 0; i < str.length; i++ ) {
        array.push(str[i]);
    }
    return array
}

function arrayToString(arr) {
    var arrayToString = arr.join();

    for (var i = 0; i < arrayToString.length; i++) {
        if (arrayToString[i] == ',') {
            arrayToString = arrayToString.replace(',', '');
        }
    }
    return arrayToString
}

function removeVowelsFromStr(str) {
}

function removeVowelsFromArray(arr) {
}

assert.deepEqual(stringToArray('test'), ['t', 'e', 's', 't']);
assert.deepEqual(stringToArray('hallo'), ['h', 'a', 'l', 'l', 'o']);

assert(arrayToString(['t', 'e', 's', 't']) === 'test');
assert(arrayToString([]) === '');

assert(removeVowelsFromStr('testing') === 'tstng');
assert(removeVowelsFromStr('tstng') === 'tstng');
assert(removeVowelsFromStr('aoeui') === '');

assert.deepEqual(removeVowelsFromArray(['t', 'e', 'o']), ['t']);
assert.deepEqual(removeVowelsFromArray(['a', 'i']), []);
assert.deepEqual(removeVowelsFromArray(['t', 't']), ['t', 't']);

