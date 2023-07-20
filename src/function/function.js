const Add = (id, cart, setCart, product) => {
  console.log(id);
  const newCart = [
    ...cart,
    {
      ...product.reduce(
        (acc, curr) => (curr._id === id ? { ...curr, count: 1 } : acc),
        {}
      ),
    },
  ];
  setCart(newCart);
};
const displayMoveButton = (id, arr) => arr.find((item) => id === item._id);

///////
const toAdd = (id, cart, setCart) => {
  console.log(id);
  const newCart = cart.reduce(
    (acc, curr) =>
      id === curr._id
        ? [...acc, { ...curr, count: curr.count + 1 }]
        : [...acc, curr],
    []
  );
  setCart(newCart);
};
const toRemove = (id, Cart, setCart) => {
  const newCart = Cart.reduce(
    (acc, curr) =>
      id === curr._id
        ? curr.count < 2
          ? [...acc]
          : [...acc, { ...curr, count: curr.count - 1 }]
        : [...acc, curr],
    []
  );
  setCart(newCart);
};

////product cart image provider
const ProvideImage = ({ title, userheight }) => {
  console.log(title, userheight);
  const imageTitle = title.replace(/\s/g, "-");
  const myImage = require(`../image/${imageTitle}.png`);
  console.log(imageTitle, `../image/${imageTitle}.png`);
  return <img src={myImage} alt="" style={{ height: userheight }} />;
};
export { Add, displayMoveButton, toAdd, toRemove, ProvideImage };
