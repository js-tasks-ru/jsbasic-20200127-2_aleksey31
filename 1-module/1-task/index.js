/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
'use strict';

function factorial(n) {
    let result = n;
    let p = n;
    if (n < 1) {
        result = 1;
    } else {
        for (let i = 1; i < n; i++) {
            result = result * (--p);
        }
    }
    return result;
}
