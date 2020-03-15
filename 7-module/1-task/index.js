/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

"use strict"
const but = document.querySelector('button');
function promiseClick(button) {
    let promise = new Promise(function(resolve) {
        button.addEventListener('click', (event) => resolve(event), { once: true });
    });
    return promise;
}
promiseClick(but).then((event) => console.log(event));
