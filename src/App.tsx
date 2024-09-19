import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Category from "./components/category/Category";
import CategoryOutlet from "./routes/category/CategoryOutlet";
import Details from "./components/details/Details";
import DetailsOutlet from "./routes/details/DetailsOutlet";
import Checkout from "./components/checkout/Checkout";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="category" element={<Category />}>
          <Route path=":id" element={<CategoryOutlet />} />
        </Route>
        <Route path="details" element={<Details />}>
          <Route path=":id" element={<DetailsOutlet />} />
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
