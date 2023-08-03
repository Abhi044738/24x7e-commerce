import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { useProduct } from "../../../context/productContext";
import { displayMoveButton } from "../../../function/function";
import { useWishlist } from "../../../context/wishListContext";
import { useAuthContext } from "../../../context/AuthContext";
import {
  addToCartHandler,
  addToWishlistHandler,
} from "../../../utils/productHandler/index";

export const DisplayOfferProduct = () => {
  const { categoriesData, product } = useProduct();
  const { Cart, setCart } = useCart();
  const navigate = useNavigate();
  const { wishlist, setWishlist } = useWishlist();
  const { token } = useAuthContext();

  return (
    <div>
      {categoriesData.map((item) => (
        <div>
          <h3>{item.categoryName}</h3>
          <p>{item.description}</p>
          <div className="home-page-item">
            {(
              product.filter(
                ({ categoryName }) => categoryName === item.categoryName
              ) ?? []
            ).map(({ title, author, price, _id, display, image }) =>
              display === true ? (
                <div className="product-item ">
                  <img src={image} alt={image} className="product-image" />
                  <h3>{title}</h3>
                  <p>{author}</p>
                  <p>Rs. {price}</p>
                  {displayMoveButton(_id, Cart) ? (
                    <button onClick={() => navigate("/cart")}>To cart</button>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          addToCartHandler(_id, token, Cart, setCart, product)
                        }
                      >
                        Add to cart
                      </button>
                    </>
                  )}
                  {displayMoveButton(_id, wishlist) ? (
                    <button onClick={() => navigate("/wishlist")}>
                      To WishList
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        addToWishlistHandler(
                          _id,
                          token,
                          wishlist,
                          setWishlist,
                          product
                        )
                      }
                    >
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
      ))}

      <div></div>
    </div>
  );
};
