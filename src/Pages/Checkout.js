import react,{useState, Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/en/world.json';

import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';
import './BurgerBuilder.js';
import "./BurgerBuilder.css";



const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const Checkout = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  const [salad,setSalad]= useState(0);
  const [bacon,setBacon]= useState(0);
  const [cheese,setCheese]= useState(0);
  const [meat,setMeat]= useState(0);
  return (
    <Fragment>
    <div className="Burger">
    <div className="Top">
    </div>
    <div className="Salad">
    Salad
    </div>
    <div className="Bacon">
    Bacon
    </div>
    <div className="Cheese">
    Cheese
    </div>
    <div className="Meat">
    Meat
    </div>
    <div className="Bottom">
    </div>
    </div>
    <table className = "price">
      <tr>
        <td>Price</td>
        <td>${salad+bacon+cheese+meat}</td>
      </tr>
    </table>
    
    <Form 
    style={{width:600+"px", margin:"auto", marginTop:10+"px"}}
    {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone number"
        rules={[
          {
            type: "number",
            required: true,
          },
        ]}
      >
        <ConfigProvider locale={en}>
            <CountryPhoneInput />
        </ConfigProvider> 
      </Form.Item>

      <Form.Item name={['user', 'address']} label="Address">
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'note']} label="Note">
        <Input.TextArea />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
        <Button type="primary" htmlType="submit">
          Order
        </Button>
      </Form.Item>
    </Form>
    </Fragment>
  );
};

export default Checkout;