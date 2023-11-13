import colelction from "../customs_data.js";

/**
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * используя данный метод, вывести новый объект с двумя свойствами -
 *
 * {
 *   totalAvailable: <тут должно быть общее количество доступных продуктов>,
 *   totalUnavailable: <тут должно быть общее количество  недоступных продуктов>
 * }
 */

/**
 * @property {Array<{id: Number, name: String, quantity: Number, availabiltiy: 0 | 1}>}
 */
const reducedColelction = colelction.reduce(
  (accumulator, collectionItem) => {
    // тут должен быть весь код
    return accumulator;
  },
  { totalAvailable: 0, totalUnavailable: 0 }
);

console.log(reducedColelction);
