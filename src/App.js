import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/Login";
import BurgerBuilderPage from "./Pages/BurgerBuilder";
import OrderPage from "./Pages/Orders"; 
import CheckoutPage from './Pages/Checkout';


const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="App" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="burgerBuilder">
          <Link to="/">Burger Builder</Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/">Orders</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/">Login</Link>
        </Menu.Item>
        <Menu.Item key="checkout">
          <Link to="/">Check Out</Link>
        </Menu.Item>
      </Menu>
    </Header>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Routes>
          <Route path="/" element={<BurgerBuilderPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </div>
  </Layout>
);
}

export default App;
