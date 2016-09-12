const assert = require('assert');

function stringToArray(str) {

    return str.split('');

}

function arrayToString(arr) {

    return arr.join('');

}

function removeVowelsFromStr(str) {

    return str.replace(/[aeiou]/g, '');

}

function removeVowelsFromArray(arr) {
    var arrToStr = arrayToString(arr);
    var rmvVowel = removeVowelsFromStr(arrToStr);
    return stringToArray(rmvVowel)
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

