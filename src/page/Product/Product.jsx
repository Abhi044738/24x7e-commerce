import { useNavigate } from "react-router-dom";
import { useCartWishlistContext } from "../../context/context";
import { useDataBase } from "../../context/dataBaseContext";
import "../Home.css";
import { Add, displayMoveButton } from "../../function/function";
import { FilterBar } from "../../components/filterBar";

export const Products = () => {
  const { dataBase } = useDataBase();
  const { Cart, setCart, WishList, setWishList } = useCartWishlistContext();
  // console.log("kkkk", Cart);
  // console.log("2", dataBase);
  const navigate = useNavigate();
  return (
    <div className="layout">
      <FilterBar />
      <div className="items product-content ">
        {(dataBase ?? []).map(({ title, author, price, _id, display }) =>
          display === true ? (
            <div className="product-item">
              <img src="/Resource/image/1984.png" alt="" />
              <h3>{title}</h3>
              <p>{author}</p>
              <p>Rs. {price}</p>
              {displayMoveButton(_id, Cart) ? (
                <button onClick={() => navigate("/cart")}>To cart</button>
              ) : (
                <>
                  <button onClick={() => Add(_id, Cart, setCart, dataBase)}>
                    Add to cart
                  </button>
                  {displayMoveButton(_id, WishList) ? (
                    <button onClick={() => navigate("/wishlist")}>
                      To WishList
                    </button>
                  ) : (
                    <button
                      onClick={() => Add(_id, WishList, setWishList, dataBase)}
                    >
                      Add to Wishlist
                    </button>
                  )}
                </>
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
