import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ProductsContextProvider from './context/ProductsContextProvider'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPageLoader from './containers/ProductsPageLoader/ProductsPageLoader';
import ProductPageLoader from './containers/ProductPageLoader/ProductPageLoader';
import CartPageLoader from './containers/CartPageLoader/CartPageLoader';
import Cart from './pages/Cart/Cart';
import Favourites from './pages/Favourites/Favourites';

function App() {
  

  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<ProductsPageLoader />} />
          <Route path="/:category/:id" element={<ProductPageLoader />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App
