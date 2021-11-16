import react, { useEffect, useState } from 'react';
import { IDENTITY_KEY_LOCALSTORAGE } from '../Constant';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import {setCart} from '../store/store';
import "./BurgerBuilder.css";

const SALAD = "Salad"
const BACON= "Bacon"
const CHEESE = "Cheese"
const MEAT = "Meat"

export default function BurgerBuilder() {
  const [credential, setCredential] = useState(JSON.parse(localStorage.getItem(IDENTITY_KEY_LOCALSTORAGE) ? localStorage.getItem(IDENTITY_KEY_LOCALSTORAGE) : '{}'));
  const cartState = useSelector((state)=>state.cart);
  const [salad,setSalad]= useState(0);
  const [bacon,setBacon]= useState(0);
  const [cheese,setCheese]= useState(0);
  const [meat,setMeat]= useState(0);
  const [total, setTotal]= useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state)=>state.isAuthenticated)
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
  const handleSubmit = ()=>{
    const cart = {
      salad,
      bacon,
      cheese,
      meat
    };
    dispatch(setCart(cart));
    if(!isAuthenticated)
      navigate('/login');
    else{
      navigate('/checkout');
    }
  }
  function changeValue(name, value) {
      switch (name) {
        case SALAD: 
        if (salad+value>=0) {
          setSalad(salad+value);
        }
        else 
          setSalad(0);
          break;
          case BACON:
            setBacon(bacon+value);
            if (bacon+value>=0) {
              setBacon(bacon+value);
            }
            else 
              setBacon(0);
          break;
          case CHEESE:
            setCheese(cheese+value);
            if (cheese+value>=0) {
              setCheese(cheese+value);
            }
            else 
              setCheese(0);
          break;
        case MEAT:
            setMeat(meat+value);
            if (meat+value>=0) {
              setMeat(meat+value);
            }
            else 
              setMeat(0);
          break;
        default:
          break;
      }
  }
  return (
    <div> 
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
    
    <table className= "burger-detail" >
      <tr>
        <td> Salad</td>
        <td> <button onClick={()=> changeValue(SALAD,-1)}>Less</button></td>
        <td> <button onClick={()=> changeValue(SALAD,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Bacon</td>
        <td> <button onClick={()=> changeValue(BACON,-1)}>Less</button></td>
        <td> <button onClick={()=> changeValue(BACON,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Cheese</td>
        <td> <button onClick={()=> changeValue(CHEESE,-1)}>Less</button></td>
        <td> <button onClick={()=> changeValue(CHEESE,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Meat</td>
        <td> <button onClick={()=> changeValue(MEAT,-1)}>Less</button></td>
        <td> <button onClick={()=> changeValue(MEAT,+1)}>More</button></td>
      </tr>
    </table>
    <div className="checkout"> 
      <button onClick = {handleSubmit}> Check out</button> 
      </div>
    </div>
  )
}

