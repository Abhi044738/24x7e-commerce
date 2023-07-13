import "../Home.css";
export const Products = () => {
  return (
    <div className="layout">
      <div className="items filters">
        <h3>
          Filter <span>Clear</span>
        </h3>
        <h3>Price</h3>
        <input type="range" />
        <h3>Category</h3>
        <label htmlFor="">
          <input type="checkbox" />
          cloths
        </label>
        <h3>Rating</h3>
        <label htmlFor="">
          <input type="checkbox" />5
        </label>
        <h3>Sortby</h3>
        <label htmlFor="">
          price
          <input type="checkbox" />
          hight to low
        </label>
      </div>
      <div className="items product-content ">
        <div className="product-item">jacs</div>
        <div className="product-item">sk</div>
        <div className="product-item">csakm</div>
        <div className="product-item">calnk</div>
        <div className="product-item">kjlln</div>
        <div className="product-item">ddcd</div>
        <div className="product-item">nrew</div>
        <div className="product-item">nrew</div>
        <div className="product-item">nrew</div>
        <div className="product-item">nrew</div>
      </div>
    </div>
  );
};
