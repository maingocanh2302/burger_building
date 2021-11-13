import react from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);};
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
          Sign In
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 11, span: 16 }}>
      Or 
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 10, span: 16 }}> 
      <Button> <a href="">Sign Up</a></Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

