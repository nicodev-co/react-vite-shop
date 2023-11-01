/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((total, product) => total + product.price, 0);
};
