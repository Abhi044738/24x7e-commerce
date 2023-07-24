import { useNavigate } from "react-router-dom";
import { useCartWishlistContext } from "../../context/CartWishlistContext";
import { useProduct } from "../../context/productContext";
import "../Home.css";
import { Add, ProvideImage, displayMoveButton } from "../../function/function";
import { FilterBar } from "../../components/FilterBar";
// import  hell from "../../image/.png";

export const Products = () => {
  const { product } = useProduct();
  const { Cart, setCart, WishList, setWishList } = useCartWishlistContext();
  const navigate = useNavigate();

  return (
    <div className="layout">
      <FilterBar />
      <div className="items product-content ">
        {(product ?? []).map(({ title, author, price, _id, display }) =>
          display === true ? (
            <div className="product-item">
              <ProvideImage title={title} userheight={"6.5rem"} />
              <h3>{title}</h3>
              <p>{author}</p>
              <p>Rs. {price}</p>
              {displayMoveButton(_id, Cart) ? (
                <button onClick={() => navigate("/cart")}>To cart</button>
              ) : (
                <>
                  <button onClick={() => Add(_id, Cart, setCart, product)}>
                    Add to cart
                  </button>
                </>
              )}
              {displayMoveButton(_id, WishList) ? (
                <button onClick={() => navigate("/wishlist")}>
                  To WishList
                </button>
              ) : (
                <button
                  onClick={() => Add(_id, WishList, setWishList, product)}
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
  );
};
