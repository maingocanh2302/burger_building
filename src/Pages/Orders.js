import react,{useState} from 'react';
import { Table } from 'antd';
import { Button} from 'antd';
const columns = [
  {
    title: 'Ingredients',
    dataIndex: 'ingredients',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: {
      compare: (a, b) => a.price - b.price,
      multiple: 1,
    },
  },
];

const initdata = [
  {
    key: '1',
    ingredients: 'Salad(2), Bacon(1), Cheese(0), Meat(2)',
    price: 5,
    
  },
  {
    key: '2',
    ingredients: 'Salad(2), Bacon(2), Cheese(1), Meat(2)',
    price: 7,
  },
];
const Orders = () => {
  const [data, setData] = useState(initdata);
  const onButtonClick = () => {
    setData([...data, {
      key: '3',
      ingredients: 'Salad(3), Bacon(0), Cheese(2), Meat(1)',
      price: 6,
    },])
  }
  function remove (){
    const tam=[...data]
    tam.pop()
    setData(tam)


  }
  return (<div>
     
    <Table className="order-table" columns={columns} dataSource={data} style={{marginTop: 100}}/>
    <Button onClick={onButtonClick} type="primary" htmlType="submit">
          Submit
        </Button>
        <button onClick={remove} type="primary" htmlType="submit">
         Remove
        </button>
  </div>)
}

export default Orders;