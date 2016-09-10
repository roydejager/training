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
    var string = str;
    for (var i = 0; i < string.length; i++) {

            string = string.replace('a','');
            string = string.replace('e', '');
            string = string.replace('i','');
            string = string.replace('o', '');
            string = string.replace('u','');
    }
    return string
}

function removeVowelsFromArray(arr) {
    var arrToStr = arrayToString(arr);
    var rmv =  removeVowelsFromStr(arrToStr);
    return stringToArray(rmv)
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

