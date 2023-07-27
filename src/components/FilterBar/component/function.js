const filterPrice = (priceSelected, product) => {
  const newproduct = product.reduce(
    (acc, curr) =>
      priceSelected >= curr.price
        ? [...acc, { ...curr, display: true }]
        : [...acc, { ...curr, display: false }],
    []
  );
  return newproduct;
};

const filtercategories = (categorySelected, product) => {
  const newproduct = product.reduce(
    (acc, curr) =>
      categorySelected === "All"
        ? [...acc, { ...curr, display: true }]
        : categorySelected.toLowerCase() !== curr.categoryName.toLowerCase()
        ? [...acc, { ...curr, display: false }]
        : [...acc, { ...curr, display: true }],
    []
  );

  return newproduct;
};

export { filtercategories, filterPrice };
