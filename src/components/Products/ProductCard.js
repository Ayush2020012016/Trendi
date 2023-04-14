import React, { useState } from "react";
import classNames from "classnames";
import "./ProductCard.scss";
import heart from "../../static/heart.svg";

const ProductCard = ({
  id,
  name,
  price,
  image,
  onWishlistToggle,
  isWishlist,
  home,
}) => {
  const [wishlist, setWishlist] = useState("false")
  const handleWishlistToggle = () => {
    onWishlistToggle(id);
  };

  return (
    <a href={""} className="product-card">
    <div className="">
      <div className="product-image-container">
        <img src={image} alt={name} />
        {home ? null : (
          <img
            src={heart}
            className={classNames("wishlist-button", {
              active: isWishlist,
            })}
            onClick={handleWishlistToggle}
          />
        )}
      </div>
      <div className="product-details-container">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
    </div>
    </a>
  );
};

export default ProductCard;
