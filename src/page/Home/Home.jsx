import "../Home.css";
import a from "../../image/a.png";
import { useDataBase } from "../../context/dataBaseContext";
import { Add, ProvideImage, displayMoveButton } from "../../function/function";
import { useCartWishlistContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { categoriesData, dataBase } = useDataBase();
  const { Cart, setCart, WishList, setWishList } = useCartWishlistContext();
  const navigate = useNavigate();
  console.log(
    "jdfsssss;sfdddddd",
    categoriesData.map((item) =>
      dataBase.filter(({ categoryName }) => categoryName === item.categoryName)
    )
  );

  // console.log("fhhh", categoriesData);
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
                dataBase.filter(
                  ({ categoryName }) => categoryName === item.categoryName
                ) ?? []
              ).map(({ title, author, price, _id, display }) =>
                display === true ? (
                  <div className="product-item ">
                    {/* <img src={"../../image/.png"} alt="" /> */}
                    <ProvideImage title={title} userheight={"6.5rem"} />
                    <h3>{title}</h3>
                    <p>{author}</p>
                    <p>Rs. {price}</p>
                    {displayMoveButton(_id, Cart) ? (
                      <button onClick={() => navigate("/cart")}>To cart</button>
                    ) : (
                      <>
                        <button
                          onClick={() => Add(_id, Cart, setCart, dataBase)}
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
                              Add(_id, WishList, setWishList, dataBase)
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
