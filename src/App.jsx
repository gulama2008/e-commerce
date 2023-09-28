import styles from './App.module.scss';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductPage from './pages/ProductPage/ProductPage';
import ProductsContextProvider from './context/ProductsContextProvider'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './pages/Cart/Cart';

function App() {
  

  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App
