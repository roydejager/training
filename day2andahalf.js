const assert = require('assert');

function isBalanced(str) {
    var array = [];


    for (var i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === ')') {
            array.push(str[i]);
        }
    }

    var arrayToString = array.join();

    for (var i = 0; i < arrayToString.length; i++) {
        if (arrayToString[i] === ',') {
            arrayToString = arrayToString.replace(',', '');
        }
    }



    for (var i = 0; i < arrayToString.length; i++) {
        var patt = new RegExp('()');
        if (patt in arrayToString) {
            console.log('wekjfb')
        }
        if (res == true ) {


        }
    }


}

    assert(isBalanced('(a)(b)((c))') === true);
// assert( isBalanced('(((b))') === false );
// assert( isBalanced(')(()') === false );
// assert( isBalanced('hello') === true );
