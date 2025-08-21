import "./ProductList.css";
import { Link } from "react-router-dom";

// src/data/Products.jsx

export const PRODUCTS = [
  {
    id: 'p1',
    name: 'Noise Cancelling Headphones',
    price: 4999,
    image: 'https://www.sony.co.in/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
    description: 'Wireless over-ear headphones with active noise cancellation and 30h battery.'
  },
  {
    id: 'p2',
    name: 'Mechanical Keyboard',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
    description: 'RGB backlit mechanical keyboard with hot-swappable switches.'
  },
  {
    id: 'p3',
    name: '4K Action Camera',
    price: 8999,
    image: 'https://www.fimi.com/static/images/camera/c1/C1_1-1.jpg',
    description: 'Compact action cam with 4K60 recording, waterproof case, and image stabilization.'
  },
  {
    id: 'p4',
    name: 'Smartwatch',
    price: 5499,
    image: 'https://plus.unsplash.com/premium_photo-1712764121254-d9867c694b81?q=80&w=909&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'AMOLED display, SpO2, GPS, 2-day battery, Android & iOS support.'
  }
];


const Products = () => {
  return (
    <div className="products">
  {PRODUCTS.map((product) => (
    <div className="product-card" key={product.id}>
      <img src={product.image} alt={product.name} />
      <div className="content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="price">₹{product.price}</div>
        <button>Add to Cart</button>
      </div>
    </div>
  ))}
</div>

  );
};

export default Products;
