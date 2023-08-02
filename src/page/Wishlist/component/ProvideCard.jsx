import axios from "axios";
import { useCart } from "../../../context/CartContext";
import { useProduct } from "../../../context/productContext";
import { useWishlist } from "../../../context/wishListContext";
import { Add, toRemove } from "../../../function/function";
import { useAuthContext } from "../../../context/AuthContext";

export const ProvideCard = () => {
  const { product } = useProduct();
  const { Cart, setCart } = useCart();
  const { token } = useAuthContext();
  const { wishlist, setWishlist } = useWishlist();
  const addToCartHandler = async (_id) => {
    const item = product.find((item) => item._id === _id);
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        { headers: { authorization: token } }
      );
      console.log(response);
      Add(_id, Cart, setCart, product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (_id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: { authorization: token },
      });
      console.log(response);
      toRemove(_id, wishlist, setWishlist);
    } catch (error) {
      console.log(error);
    }
  };
  return wishlist.map(({ title, author, price, _id, image }) => (
    <div className="cart">
      <div>
        <img
          style={{ height: "fillContent" }}
          src={image}
          alt={image}
          // className="wishlist-product-image"
        />

        {/* <ProvideImage title={title} userheight={"fit-content"} /> */}
      </div>
      <div>
        <h3>{title}</h3>
        <p>by {author}</p>
        <p>{price}</p>
        {!Cart.find((item) => item._id === _id) ? (
          <button onClick={() => addToCartHandler(_id)}>Add to cart</button>
        ) : (
          <></>
        )}
        <button onClick={() => handleDelete(_id)}>Remove From Wishlist</button>
      </div>
    </div>
  ));
};
