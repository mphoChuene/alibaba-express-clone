import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Nav";
import ProductListings from "./components/ProductListings/ProductListings";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Products/>
      <ProductListings/>
    </>
  );
}

export default App;
