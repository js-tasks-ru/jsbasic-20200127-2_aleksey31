/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;

    this.el.classList.add("pure-table");
    this.el.innerHTML = `<thead>
                                <tr>
                                    <td>Name</td><td>Age</td><td>Salary</td><td>City</td><td></td>
                                </tr>
                            </thead>
                         <tbody></tbody>`;
    let tBody = this.el.querySelector("tbody");

    data.forEach((item, index) => {
      let row = document.createElement('tr');
      row.innerHTML = `<td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><a href="" data-close="${item.id}">X</a></td>`;
      tBody.append(row);
    });

    this.el.addEventListener("click", rowRemove);
    this.el.addEventListener("click", (e) => this.onRemoved(e.target.dataset.close));
    function rowRemove(e) {
      e.preventDefault();
      if (e.target.tagName === "A") {
        e.target.closest("tr").remove();
        let returnId = new Event("my-event");
        e.target.dispatchEvent(returnId);
      }
    }
  }


  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
     console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
