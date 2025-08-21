import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products || []);
  const cart = useSelector((state) => state.cart);

  const product = products.find((p) => p.id === parseInt(id));
  const inCart = cart.some((item) => item.id === product?.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleCartToggle = () => {
    if (inCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleCartToggle}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
