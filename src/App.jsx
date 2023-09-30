import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ProductsContextProvider from './context/ProductsContextProvider'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart/Cart';
import ProductsPageLoader from './containers/ProductsPageLoader/ProductsPageLoader';
import ProductPageLoader from './containers/ProductPageLoader/ProductPageLoader';

function App() {
  

  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:category" element={<ProductsPageLoader/>} />
          <Route path="/:category/:id" element={<ProductPageLoader />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App
