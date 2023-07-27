import { useCart } from "../../../context/CartContext";
import { ProvideImage, toAdd, toRemove } from "../../../function/function";
export const ProvideCard = () => {
  const { Cart, setCart } = useCart();
  return Cart.map(({ _id, author, title, price, categoryName, count }) => (
    <div className="cart ">
      <div>
        <ProvideImage title={title} userheight={"fit-content"} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>
          Rs {price} categoryName {categoryName}
        </p>
        <br />
        <p>
          <button onClick={() => toRemove(_id, Cart, setCart)}>-</button>
          count:{count}
          <button onClick={() => toAdd(_id, Cart, setCart)}>+</button>
        </p>
      </div>
    </div>
  ));
};
