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
    ingredients: 'John Brown',
    price: 98,
    
  },
  {
    key: '2',
    ingredients: 'Jim Green',
    price: 98,
  },
  {
    key: '3',
    ingredients: 'Joe Black',
    price: 98,
  },
  {
    key: '4',
    ingredients: 'Jim Red',
    price: 88,
  },
];
const Orders = () => {
  const [data, setData] = useState(initdata);
  const onButtonClick = () => {
    setData([...data, {
      key: '5',
      ingredients: 'Emma',
      price: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },])
  }
  return (<div>
     <Button onClick={onButtonClick} type="primary" htmlType="submit">
          Submit
        </Button>
    <Table className="order-table" columns={columns} dataSource={data} />
  </div>)
}
// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }

export default Orders;