/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
    let promise;
    button.addEventListener('click', (event) => {
        promise = new Promise(function(resolve, reject) {
            resolve(event);
        });
        return promise;
    }, { once: true });
    return promise;
}
