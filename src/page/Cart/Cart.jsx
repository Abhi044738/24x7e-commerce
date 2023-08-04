import { useCart } from "../../context/CartContext";
import "./style.css";
import { ProvideCard } from "./component/ProvideCard";
export const Cart = () => {
  const { cartState } = useCart();
  const Cart = cartState.cart;
  console.log(Cart);
  return (
    <div>
      <div className="cartpage-container">
        <div className="cards ">
          <ProvideCard />
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
