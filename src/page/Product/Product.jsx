import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/productContext";
import "../style.css";
import { Add, displayMoveButton } from "../../function/function";

import { useCart } from "../../context/CartContext";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { useWishlist } from "../../context/wishListContext";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
// import  hell from "../../image/.png";

export const Products = () => {
  const { product } = useProduct();
  const { Cart, setCart } = useCart();
  const { wishlist, setWishlist } = useWishlist();
  const navigate = useNavigate();
  const { token } = useAuthContext();
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
  const addToWishlistHandler = async (_id) => {
    const item = product.find((item) => item._id === _id);
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        {
          product: item,
        },
        { headers: { authorization: token } }
      );
      console.log(response);
      Add(_id, wishlist, setWishlist, product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="layout">
      <FilterBar />
      <div className="items product-content ">
        {(product ?? []).map(({ title, author, price, _id, display, image }) =>
          display === true ? (
            <div className="product-item">
              <img src={image} alt={image} className="product-image" />
              {/* <ProvideImage title={title} userheight={"6.5rem"} /> */}
              <h3>{title}</h3>
              <p>{author}</p>
              <p>Rs. {price}</p>
              {displayMoveButton(_id, Cart) ? (
                <button onClick={() => navigate("/cart")}>To cart</button>
              ) : (
                <>
                  <button onClick={() => addToCartHandler(_id)}>
                    Add to cart
                  </button>
                </>
              )}
              {displayMoveButton(_id, wishlist) ? (
                <button onClick={() => navigate("/wishlist")}>
                  To WishList
                </button>
              ) : (
                <button onClick={() => addToWishlistHandler(_id)}>
                  Add to Wishlist
                </button>
              )}
            </div>
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};
