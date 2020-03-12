/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
    button.addEventListener('click', (event) => {
        let promise = new Promise(function(resolve, reject) {
            resolve(event);
        });
    }, { once: true });
}
