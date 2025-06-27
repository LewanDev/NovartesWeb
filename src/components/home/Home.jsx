import NavBar from "../navbar/NavBar";
import Banner from "../banner/Banner";
import Products from "../products/Products";

const Home = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="product-card-container">
        <Products />
      </div>
    </>
  );
};

export default Home;
