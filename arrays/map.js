import colelction from "../customs_data.js";

/**
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * Используя данный метод: вернуть новый массив объектов, в которых свойсвто availability будет заменено на "AVAILABLE"
 * если у свойства availability значение 1, или же "NOT AVAILABLE" если значение свойства availabilty равно 0
 */

/**
 * сделаем копию коллекции чтобы можно было сравнить результаты
 */
const initialCollection = colelction;

console.log(initialCollection);

/**
 * @property {Array<{id: Number, name: String, quantity: Number, availabiltiy: 0 | 1}>}
 */
const mappedColelction = initialCollection.map((collectionItem) => {
  // тут должен быть весь код
});

console.log(mappedColelction);
