import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h2>Checkout Successful 🎉</h2>
      <p>Thank you for your purchase!</p>

      <p>
        You bought <strong>{cart.length}</strong> items <br />
        Total: <strong>₹{total.toFixed(2)}</strong>
      </p>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Checkout;

