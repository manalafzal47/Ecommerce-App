import './App.css';
import ProductsPage from './ProductsPage';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Routes>
        <Route path="/" element = {<ProductsPage/>}/>
      </Routes>
  );
};

export default App;
