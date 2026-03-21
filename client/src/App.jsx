import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Footer } from "./sections";

const App = () => {
  return (
    <main className="relative bg-[#ECE9E2] dark:bg-zinc-900">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
        <section className='bg-[#212121] padding-x padding-t pb-8'>
       < Footer /> 
      </section>
    </main>
  );
};

export default App;