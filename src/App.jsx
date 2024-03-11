import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Nav/Nav";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Products/>
    </>
  );
}

export default App;
