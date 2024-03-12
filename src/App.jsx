import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Nav";
import ProductListings from "./components/ProductListings/ProductListings";
import Products from "./components/Products/Products";
import Slider from "./components/Slideshow/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <ProductListings />
      <Slider />
      <Footer />
    </>
  );
}

export default App;
