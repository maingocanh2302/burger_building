import react,{useEffect, useState} from 'react';
import { Table } from 'antd';
import { Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from  "../Service/order.service";
import {setToken,setAuth} from '../store/store';
import axios from 'axios';
import {getOrder_URL} from "../Constant/order";
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const columns = [
  {
    title: 'Ingredients',
    dataIndex: 'ingredients',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => {
      const comparer = new Intl.Collator([],{numeric: true});
      return comparer.compare(a.price, b.price);
    },
  },
];

  const Orders= () => {
  const isAuthenticated = useSelector((state)=>state.isAuthenticated)
  let [orderData,setOrderData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(()=>{
    if(!isAuthenticated)
      navigate('/Login')
    else 
      getOrder();
  },[])
  const onFinish = async (values) => {
    console.log(values);
    const data = await api.order(values);
    dispatch(setAuth(true));
    window.location.href = '/';
  };
  const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
  };
  function getOrder (){
    fetch(`${getOrder_URL}?auth=${localStorage.getItem("tokenID")}`).then(res=>{
      return res.json();
    }).then(dataRes=>{

        console.log(dataRes);
        const formatedRowData = doFormatToRowDatas(dataRes);
        setOrderData(formatedRowData);
      
    })
   
    const doFormatToRowDatas =(userOrder) => {
      console.log(userOrder)
      if(userOrder !== null){
        return Object.keys(userOrder).map((orderKey, index) => {
          
          const currentOrder =  userOrder[orderKey];

          let ingredientsData = "";
          if(currentOrder.ingredients){
            Object.keys(currentOrder.ingredients).forEach((ingre)=>{
              ingredientsData+= `${ingre}(${(currentOrder.ingredients)[ingre]}) `;
            })
          }
          console.log(currentOrder.orderData);
          console.log(currentOrder);
          return {ingredients: ingredientsData, price: `${currentOrder.price} $`, details: currentOrder.orderData, key: index}
        })
      }
      else{
        return []
      }
    }
  }
  console.log(`${getOrder_URL}${localStorage.getItem('tokenID')}`);
  return (
  <div>
     
    <Table className="order-table" columns={columns} dataSource={orderData} style={{marginTop: 100}}/>
    <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <button type="primary" htmlType="submit">
         Remove
        </button>
  </div>)
}

export default Orders;