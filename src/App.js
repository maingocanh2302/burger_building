import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./Pages/Login";
import BurgerBuilderPage from "./Pages/BurgerBuilder";
import OrderPage from "./Pages/Orders"; 
import CheckoutPage from './Pages/Checkout';
import RegisterPage from './Pages/Register';
import {useEffect} from 'react';
import {IDENTITY_KEY_LOCALSTORAGE } from './Constant';
import { useDispatch,useSelector } from 'react-redux';
import {setAuth} from './store/store';
const { Header, Content, Footer } = Layout;
function App() {
  const dispatch = useDispatch();

  useEffect(() =>{
    if(localStorage[IDENTITY_KEY_LOCALSTORAGE])
      dispatch(setAuth(true));
    else
      dispatch(setAuth(false));
  },[]);
  const handleLogout = ()=>{
    localStorage.removeItem(IDENTITY_KEY_LOCALSTORAGE);
    window.location.reload();
  }
  return (
    <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="App" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="burgerBuilder">
          <Link to="/">Burger Builder</Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/orders">Orders</Link>
        </Menu.Item>
        
        <Menu.Item key="checkout">
          <Link to="/checkout">Check Out</Link>
        </Menu.Item>
        {
         localStorage[IDENTITY_KEY_LOCALSTORAGE]?
         <Menu.Item key="logout" onClick ={handleLogout}>
         Logout
         </Menu.Item>:
          <>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="register">
          <Link to="/register">Register</Link>
        </Menu.Item>
          </>
        }
        
      </Menu>
    </Header>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
      <Routes>
          <Route path="/" element={<BurgerBuilderPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </div>
  </Layout>
);
}

export default App;
