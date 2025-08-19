import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart, isInCart } from "../redux/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const inCart = useSelector(isInCart(product.id));
  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-media">
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">{formatCurrency(product.price)}</p>
        {inCart ? (
          <button
            className="btn btn-secondary"
            onClick={() => dispatch(removeFromCart(product.id))}
          >
            Remove from Cart
          </button>
        ) : (
          <button className="btn" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
