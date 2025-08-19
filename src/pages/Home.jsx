import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");

  useEffect(() => {
    const t = setTimeout(() => {
      setProducts(PRODUCTS);
      setLoading(false);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return products;
    return products.filter((p) => p.name.toLowerCase().includes(query));
  }, [q, products]);

  return (
    <section>
      <div className="home-header">
        <SearchBar value={q} onChange={setQ} />
        <CartSummary />
      </div>

      {loading ? (
        <p>Loading products…</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          {filtered.length === 0 && <p>No products match your search.</p>}
        </div>
      )}
    </section>
  );
}
