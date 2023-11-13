import customs_data from "./customs_data.js";

// Задание 1
export function paginatedTable(itemsPerPage = 5) {
  // 1 - найти элемент tbody с классом .customs_data
  const tbody = document.querySelector(".customs_data");
  // 2 - создать элемент tr
  const tr = document.createElement("tr");
  // 3 - создать элемент td
  const td = document.createElement("td");
  // с этим циклоM поосторожнее - так как может зависнуть браузер (это хороший пример того как иногда ломаются браузеры)
  // из за утечек памяти
  // while (tbody.firstChild) {
  // 4 - перед вызовом функции очистить tbody чтобы не дублировать
  // данные в таблице
  // }
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
  // 5 - вырезать часть массива длиннной равной переменной itemsPerPage
  const newArray = customs_data.slice(0, 5);
  // 6 - используем цикл forEach
  //  все операции ниже должны быть внутри тела цикла
  newArray.forEach((element, index) => {
    // 7 - клонировать tr как текущий ряд
    const currentTr = tr.cloneNode(true);
    // 8 - клонировать td для порядковго номера
    const currentTdNumber = td.cloneNode(true);
    // 9 - клонировать td для Id това
    const currentTdId = td.cloneNode(true);
    // 10 - клонировать td для названия товара
    const currentTdCustom = td.cloneNode(true);
    // 11 - клонировать td для колличества товара
    const currentTdQuantityCustom = td.cloneNode(true);
    // 12 - клонировать td для наличия товара для немедлнной доставки
    const currentTdDeliveryCustom = td.cloneNode(true);

    // 13 - используя свойство textContent зависать в каждую ячейку соответсвующие данные

    // itemIndex.textContent = index + 1; // мы используем запись index + 1 так как массив начинается с идекса 0
    currentTdNumber.textContent = index + 1;
    currentTdId.textContent = element.id;
    // 14 - для немедленной доставки использовать тернарный оператор,
    // условие следующее: если item.availabiltiy не равен 0 то записать в ячейку
    // "AVAILABLE IMMEDIATELLY"
    // если равен - то записать "NOT AVAILABLE"
    currentTdDeliveryCustom.textContent = element.availabiltiy
      ? "AVAILABLE IMMEDIATELLY"
      : "NOT AVAILABLE";
    currentTdCustom.textContent = element.name;
    currentTdQuantityCustom.textContent = element.quantity;
    // 15 - используя метод .append() добавить в текущий ряд все ячейки по порядку
    currentTr.append(
      currentTdNumber,
      currentTdId,
      currentTdCustom,
      currentTdQuantityCustom,
      currentTdDeliveryCustom
    );
    // 16 - записать в tbody текущий ряд
    tbody.appendChild(currentTr);
  });
}
