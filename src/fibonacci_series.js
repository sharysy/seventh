'use strict';

function fibonacci_series(n) {
    var i, arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (i = 2; i <= n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr;
}
module.exports = fibonacci_series;