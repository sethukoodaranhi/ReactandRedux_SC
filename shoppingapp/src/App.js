import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Dashboard from './page/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
