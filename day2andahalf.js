const assert = require('assert');

function isBalanced(str) {

    var string = '';
    for (var i =0; i < str.length; i++ ) {
        if (str[i] === '(' || str[i] === ')') {
            string += str[i];
        }
    }

    // for (var i = 0; i < arrayToString.length; i++) {
    //     var patt = new RegExp('()');
    //     if (patt in arrayToString) {
    //         console.log('wekjfb')
    //     }
    //     if (res == true ) {
    //
    //
    //     }
    // }


}

    assert(isBalanced('(a)(b)((c))') === true);
// assert( isBalanced('(((b))') === false );
// assert( isBalanced(')(()') === false );
// assert( isBalanced('hello') === true );
