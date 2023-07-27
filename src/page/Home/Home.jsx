import "./style.css";
import a from "../../image/a.png";

import { DisplayOfferProduct } from "./component/DisplayOfferProduct.jsx";

export const Home = () => {
  return (
    <div className="container-home">
      <img src={a} alt="" style={{ maxHeight: "40rem" }} />
      {DisplayOfferProduct()}
    </div>
  );
};
