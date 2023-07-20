import { useCartWishlistContext } from "../../context/context";
import { ProvideImage, toAdd, toRemove } from "../../function/function";
import "../Home.css";
export const Cart = () => {
  const { Cart, setCart } = useCartWishlistContext();

  console.log(Cart);
  return (
    <div>
      <div className="cartpage-container">
        <div className="cards ">
          {Cart.map(({ _id, author, title, price, categoryName, count }) => (
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
                  <button onClick={() => toRemove(_id, Cart, setCart)}>
                    -
                  </button>
                  count:{count}
                  <button onClick={() => toAdd(_id, Cart, setCart)}>+</button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="cards check-out">
          <div className="checkout">
            <p>
              Total: Rs{" "}
              {Cart.reduce((acc, curr) => acc + curr.count * curr.price, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
