/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
    button.addEventListener('click', (event) => {
        let promise = new Promise(function(resolve) {
            resolve(event);
        });
        promise.then((event) => console.log(event));
    }, { once: true });
}
