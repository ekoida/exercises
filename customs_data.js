const randomNumber = (max) => Math.floor(Math.random() * max);

const generateData = (numberOfEntries) => {
  const result = [];
  for (let i = 0; i <= numberOfEntries; i++) {
    result.push({
      id: randomNumber(1000),
      name: `Random name with numbers ${randomNumber(10)}`,
      quantity: randomNumber(1000),
      availabiltiy: randomNumber(100) > 5 ? 1 : 0,
    });
  }

  return result;
};

/**
 * @module
 *
 * @property {Array<{id: Number, name: String, quantity: Number, availabiltiy: 1 | 0}>}
 *
 */
export default [
  {
    id: randomNumber(1000),
    name: `Random name with numbers ${randomNumber(10)}`,
    quantity: randomNumber(1000),
    availabiltiy: randomNumber(10) > 5 ? 1 : 0,
  },

  ...generateData(40),
];
