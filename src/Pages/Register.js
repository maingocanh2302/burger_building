import react, { useState,useEffect } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setToken,setAuth} from '../store/store';

import authService from '../Service/auth.service';
import './Login.css';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=>state.isAuthenticated)
  useEffect(()=>{
    if(isAuthenticated)
      navigate('/')
  },[])
  const onFinish = async (values) => {
    try{
      await authService.register(values);
      dispatch(setAuth(true));
      window.location.href = '/';
    } catch(err) {
      setErrorMessage(err.message)
    }
  }; 
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  const onFormChange = () => {
    setErrorMessage('');
  }
  return (
    <Form
      style={{marginTop: 100}}
      name="normal-Register"
      className="Register-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onChange={onFormChange}
      autoComplete="off"
    >
      {errorMessage && <Alert message={errorMessage} type="error" />}

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
   
      <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
        <Button type="primary" htmlType="submit" className="login-form-button" >
          Register
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
      Or 
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 16 }}> 
      <Button> <a href="">Login</a></Button>
      </Form.Item>
    </Form>
  );
};

export default Register;

