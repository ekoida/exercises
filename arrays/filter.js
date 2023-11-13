import collection from "../customs_data.js";

/**
 *
 * 1 - Отфильтровать коллекцию наличию (availabiltiy), оставить только те объекты которые есть в наличии
 * 2 - Создать свой фильтр и оставить объекты, количество которых находится между 5 и 12
 * 3 - Объеденить два первых фильтра в одном
 *
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

//const result = words.filter((word) => word.length > 6);

//console.log(collection);//

const filteredCollection = collection.filter(
  (collectionItem) => collectionItem.availabiltiy === 1
);

// console.log(",filterd collection", filteredCollection);
const rangedCollection = collection.filter(
  (collectionItem) =>
    collectionItem.quantity < 120 && collectionItem.quantity > 50
);
console.log(rangedCollection);
const availablerangedCollection = collection.filter((collectionItem) => {});
