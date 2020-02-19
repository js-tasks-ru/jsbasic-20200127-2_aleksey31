/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tbody = table.querySelector("tbody");
    let tr = tbody.rows;
    for (let item of tr) {
        if (item.cells[3].hasAttribute("data-available")) {
            if (item.cells[3].dataset.available === "true") {
                item.classList.add('available');
            } else if (item.cells[3].dataset.available === "false") {
                item.classList.add('unavailable');
            }



        } else {
            item.setAttribute("hidden", "");
        }

        if (item.cells[2].innerHTML === "f") {
            item.classList.add('female');
        } else if (item.cells[2].innerHTML === "m") {
            item.classList.add('male');
        }

        if (item.cells[1].innerHTML < 18 ) {
            item.style.textDecoration = "line-through";
        }

    }
}
