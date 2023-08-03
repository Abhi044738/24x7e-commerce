import "./style.css";

import { DisplayOfferProduct } from "./component/DisplayOfferProduct.jsx";
import { a } from "../../assets/image/index";

export const Home = () => {
  return (
    <div className="container-home">
      <img src={a} alt="" style={{ maxHeight: "40rem" }} />
      {DisplayOfferProduct()}
    </div>
  );
};
