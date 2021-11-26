import react,{useState, Fragment, useEffect } from 'react';
import { Form, Input, Button, message} from 'antd';
import { useForm } from 'antd/lib/form/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
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
  const [salad,setSalad]= useState(0);
  const [bacon,setBacon]= useState(0);
  const [cheese,setCheese]= useState(0);
  const [meat,setMeat]= useState(0);
  const [total, setTotal]= useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=>state.isAuthenticated)
  const cartState = useSelector((state)=>state.cart);
  const [form] = useForm();

  function checkoutHandle(){
    const api_URL = 'https://react-app-6be28.firebaseio.com/orders.json?auth=';
    const tokenID = localStorage.getItem(`tokenID`);
    const data = {};
    data.orderData= form.getFieldsValue();
    data.price = total;
    data.useId= localStorage.getItem(`userId`);
    data.ingredients={
      bacon,
      cheese,
      meat,
      salad
    }
    fetch(`${api_URL}${tokenID}`,{
      method:"post",
      headers:{
        "accept":"application/json",
        "content-type":"application/json"
      },
      body : JSON.stringify(data)
    }).then(
      res=>{
        return res.json();

      }
    ).catch(
      err=>{
        console.log(err);
      }
    ).then(
      dataRes =>{
        if(dataRes.error)
          {
            message.error('order fail');
          }
        else{
          message.success('Order success');
        }
      }
    )
  }
  
  useEffect(()=>{
    if(cartState.salad)
      setSalad(cartState.salad);
    if(cartState.cheese)
      setCheese(cartState.cheese);
    if(cartState.bacon)
      setBacon(cartState.bacon);
    if(cartState.meat)
      setMeat(cartState.meat);
  },[])
  useEffect(()=>{
    setTotal(salad+cheese+bacon+meat);
  },[salad,cheese,bacon,meat])
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Fragment>
   <div className="Burger">
    <div className="Top">
    </div>
    <div> 
     {Array(salad).fill(<div className="Salad" value="Salad"> Salad </div>)}
    </div>
    <div>
    {Array(bacon).fill(<div className="Bacon" value="Bacon"> Bacon </div>)}
    </div>
    <div>
    {Array(cheese).fill(<div className="Cheese" value="Cheese"> Cheese </div>)}
    </div>
    <div>
    {Array(meat).fill(<div className="Meat" value="Meat"> Meat </div>)}
    </div>
    <div className="Bottom">
    </div>
    </div>
    <table className = "price">
      <tr>
        <td>Price</td>
        <td>${total}</td>
      </tr>
    </table>
    
    <Form 
    form={ form}
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
        <Button onClick={checkoutHandle} type="primary" htmlType="submit">
          Order
        </Button>
      </Form.Item>
    </Form>
    </Fragment>
  );
};

export default Checkout;