import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/Login";
import BurgerBuilderPage from "./Pages/BurgerBuilder";
import OrderPage from "./Pages/Orders"; 
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<BurgerBuilderPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
);
}

export default App;
