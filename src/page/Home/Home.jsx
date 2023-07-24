import "../Home.css";
import a from "../../image/a.png";
import { useProduct } from "../../context/productContext";
import { Add, ProvideImage, displayMoveButton } from "../../function/function";
import { useCartWishlistContext } from "../../context/CartWishlistContext";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { categoriesData, product } = useProduct();
  const { Cart, setCart, WishList, setWishList } = useCartWishlistContext();
  const navigate = useNavigate();

  return (
    <div className="container-home">
      <img src={a} alt="" style={{ maxHeight: "40rem" }} />
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
              ).map(({ title, author, price, _id, display }) =>
                display === true ? (
                  <div className="product-item ">
                    <ProvideImage title={title} userheight={"6.5rem"} />
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <p>Rs. {price}</p>
                    {displayMoveButton(_id, Cart) ? (
                      <button onClick={() => navigate("/cart")}>To cart</button>
                    ) : (
                      <>
                        <button
                          onClick={() => Add(_id, Cart, setCart, product)}
                        >
                          Add to cart
                        </button>
                        {displayMoveButton(_id, WishList) ? (
                          <button onClick={() => navigate("/wishlist")}>
                            To WishList
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              Add(_id, WishList, setWishList, product)
                            }
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
        ))}

        <div></div>
      </div>
    </div>
  );
};
