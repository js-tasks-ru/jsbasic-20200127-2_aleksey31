/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
    button.addEventListener('click', (event) => {
        return new Promise(function(resolve, reject) {
            resolve(event);
        });
        //return promise;
    }, { once: true });
}
