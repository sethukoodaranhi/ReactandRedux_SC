import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Dashboard from './page/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>              
        <Route path="/" element={<Dashboard/>}/>
        <Route path="products" element={<Products/>} />
        <Route path="cart" element={<Cart />} />        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
