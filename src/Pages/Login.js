import react, {useEffect} from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {setToken,setAuth} from '../store/store';

import api from  "../Service/auth.service";
import './Login.css';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const Login = () => {
  const isAuthenticated = useSelector((state)=>state.isAuthenticated)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(isAuthenticated)
      navigate('/')
  },[])
  const onFinish = async (values) => {
    console.log(values);
    const data = await api.login(values);
    dispatch(setAuth(true));
    window.location.href = '/';
  };
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };


  return (
    <Form
      style={{marginTop: 100}}
      name="normal-login"
      className="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
        
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 16 }}
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 9, span: 16 }} name="remember" valuePropName="checked" nostyle >
        <Checkbox>Remember me</Checkbox>
        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Login
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
      Or 
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 16 }}> 
      <Button>Register</Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

