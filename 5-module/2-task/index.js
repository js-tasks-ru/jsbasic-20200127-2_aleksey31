/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */

function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let tBody = document.createElement('tbody');
  let tHead = document.createElement('thead');
  let row = document.createElement('tr');
  row.innerHTML = `<td>Name</td><td>Age</td><td>Salary</td><td>City</td>`;
  tHead.append(row);
  this.el.append(tHead);
  this.el.append(tBody);

  items.forEach((itemTr, index) => {
    let tr = document.createElement('tr');
    tBody.append(tr);
    for (let itemTd in itemTr) {
      let td = document.createElement('td');
      td.innerHTML = itemTr[itemTd];
      tr.append(td);
    }
  });


  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */


  this.sort = (column, desc = false) => {
    let arrRows = tBody.rows;
    arrRows = Array.from(arrRows);
    let arrCells = arrRows.map((item) => item = Array.from(item.cells));
    arrCells.sort((a, b) => {
      if (desc == true) {
        if (!isNaN(+a[column].innerHTML)) {
          return +a[column].innerHTML > b[column].innerHTML ?  -1 : 1;
        }
        return a[column].innerHTML > b[column].innerHTML ?  -1 : 1;
      } else {
        if (!isNaN(+a[column].innerHTML)) {
          return +a[column].innerHTML > b[column].innerHTML ?  1 : -1;
        }
        return a[column].innerHTML > b[column].innerHTML ? 1 : -1;
      }
    });

    tBody.innerHTML = '';

    arrCells.forEach((item, index, arr) => {
      let tr = document.createElement('tr');
      tBody.append(tr);

      item.forEach((itemTd, indexTd) => {
        let td = document.createElement('td');
        tr.append(itemTd);
      });
    });

    console.log(arrCells);

  };
}
