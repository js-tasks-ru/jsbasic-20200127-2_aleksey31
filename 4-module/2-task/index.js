/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let rows = Array.from(table.rows);
    rows.forEach (function(row, rowIndex) {
        let cell = Array.from(row.cells);
        cell.forEach(function(cell, cellIndex, arr) {
            if (cellIndex == rowIndex) {
                arr[cellIndex].style.backgroundColor = "red";
            }
        });
    });
}
