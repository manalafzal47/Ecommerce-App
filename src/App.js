import './App.css';
import ProductsPage from './ProductsPage';
import CheckOut from './CheckOut';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element = {<ProductsPage/>}/>
        <Route path = "/checkout" element = {<CheckOut/>}/>
      </Routes>
  );
};

export default App;
