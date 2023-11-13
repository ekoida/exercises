import colelction from "../customs_data.js";

/**
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 *
 * Используя данный метод: найти объект с доступной доставкой : avaliability = 1
 */

/**
 * сделаем копию коллекции чтобы можно было сравнить результаты
 */
const initialCollection = colelction;

console.log(initialCollection);

const foundColelction = initialCollection.find((collectionItem) => {
  // тут должен быть весь код
});

console.log(foundColelction);
