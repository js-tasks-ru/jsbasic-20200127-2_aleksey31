/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {

    return button.addEventListener('click', (event) => {
        new Promise(function(resolve, reject) {
            resolve(event);
        });
    }, { once: true });

}
