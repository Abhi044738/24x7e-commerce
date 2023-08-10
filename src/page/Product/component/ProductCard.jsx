// import { useNavigate } from "react-router-dom";
// import { useProduct } from "../../../context/productContext";
// import { displayMoveButton } from "../../../function/function";
// import { addToCartHandler } from "../../../utils/cartHandler/index";
// import { useCart } from "../../../context/CartContext";
// import { useWishlist } from "../../../context/wishListContext";
// import { useAuthContext } from "../../../context/AuthContext";
// import { addToWishlistHandler } from "../../../utils/WishlistHandler/index";

// export const ProductCard = () => {
//   const { product } = useProduct();
//   const navigate = useNavigate();
//   const { cartState, setCart, cartDispatch } = useCart();
//   const { wishlistState, setWishlist, wishlistDispatch } = useWishlist();
//   const { token } = useAuthContext();
//   const Cart = cartState.cart;
//   const wishlist = wishlistState.wishlist;
//   return (product ?? []).map(({ title, author, price, _id, display, image }) =>
//     display === true ? (
//       <div className="product-item">
//         <img src={image} alt={image} className="product-image" />
//         <h3>{title}</h3>
//         <p>{author}</p>
//         <p>Rs. {price}</p>
//         {displayMoveButton(_id, Cart) ? (
//           <button onClick={() => navigate("/cart")}>To cart</button>
//         ) : (
//           <>
//             <button
//               onClick={() =>
//                 addToCartHandler(
//                   _id,
//                   token,
//                   Cart,
//                   setCart,
//                   product,
//                   cartDispatch
//                 )
//               }
//             >
//               Add to cart
//             </button>
//           </>
//         )}
//         {displayMoveButton(_id, wishlist) ? (
//           <button onClick={() => navigate("/wishlist")}>To WishList</button>
//         ) : (
//           <button
//             onClick={() =>
//               addToWishlistHandler(
//                 _id,
//                 token,
//                 wishlist,
//                 setWishlist,
//                 product,
//                 wishlistDispatch
//               )
//             }
//           >
//             Add to Wishlist
//           </button>
//         )}
//       </div>
//     ) : (
//       <></>
//     )
//   );
// };
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../context/productContext";
import { displayMoveButton } from "../../../function/function";
import { addToCartHandler } from "../../../utils/cartHandler/index";
import { useCart } from "../../../context/CartContext";
import { useWishlist } from "../../../context/wishListContext";
import { useAuthContext } from "../../../context/AuthContext";
import { addToWishlistHandler } from "../../../utils/WishlistHandler/index";
import { useFilter } from "../../../context/FlterContext";

export const ProductCard = () => {
  const { product } = useProduct();
  const navigate = useNavigate();
  const { cartState, setCart, cartDispatch } = useCart();
  const { wishlistState, setWishlist, wishlistDispatch } = useWishlist();
  const { token } = useAuthContext();
  const { filterState } = useFilter();
  const Cart = cartState.cart;
  const wishlist = wishlistState.wishlist;

  const products = () =>
    product.filter(
      (item) =>
        filterState.categorySelected === "All" ||
        (filterState.categorySelected === item.categoryName &&
          filterState.priceSelected >= item.price)
    );
  console.log("herer ", products());
  return (products() ?? []).map(
    ({ title, author, price, _id, display, image }) =>
      display === true ? (
        <div className="product-item">
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
                  addToCartHandler(
                    _id,
                    token,
                    Cart,
                    setCart,
                    product,
                    cartDispatch
                  )
                }
              >
                Add to cart
              </button>
            </>
          )}
          {displayMoveButton(_id, wishlist) ? (
            <button onClick={() => navigate("/wishlist")}>To WishList</button>
          ) : (
            <button
              onClick={() =>
                addToWishlistHandler(
                  _id,
                  token,
                  wishlist,
                  setWishlist,
                  product,
                  wishlistDispatch
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
  );
};
