import { useContext, useState, useEffect } from "react";
import { Context } from "../../context/Context";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addProduct } = useContext(Context);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    setError(false);
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  /*
  //Consumiendo la API de novartes
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "https://novartes.com.ar/api/articulos.php"
        );
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);
  */

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-container">
      {products.length === 0 && !loading ? (
        <p>No products available</p>
      ) : (
        <>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              <button onClick={() => addProduct(product)}>Comprar</button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Products;
