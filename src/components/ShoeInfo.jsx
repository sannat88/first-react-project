import React from "react";
import "../Style/ShoeInfo.css";

function ShoeInfo() {
  return (
    <main>
      <div className="hero-text">
        <h1>Step into Greatness</h1>
        <p className="first-p">
        Experience unmatched performance and style with Nike sports shoes. Engineered for excellence, these cutting-edge athletic shoes blend advanced technology with sleek design to elevate your game on and off the field.
        </p>
        <div className="buttons">
          <button>shop now</button>
          <button>category</button>
        </div>
        <div className="shop">
          <p className="last-p">also available on</p>
          <img src="../../public/images/flipkart.png" alt="flipkart" />
          <img src="../../public/images/amazon.png" alt="amazon" />
        </div>
      </div>
      <div className="hero-image">
        <img src="../../public/images/shoe-image.png" alt="shoe" />
      </div>
    </main>
  );
}

export default ShoeInfo;
