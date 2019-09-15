const getFullItemsPrice = products => products.reduce((acc, product) => {
  return acc + product.price * product.quantity;
}, 0);

export default getFullItemsPrice;