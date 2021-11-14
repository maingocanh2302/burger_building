import react, { useState } from 'react';
import {Img} from 'react-image';
import { IDENTITY_KEY_LOCALSTORAGE } from '../Constant'
import { Form, Input, Button } from 'antd';
import "./BurgerBuilder.css";


export default function BurgerBuilder() {
  const [credential, setCredential] = useState(JSON.parse(localStorage.getItem(IDENTITY_KEY_LOCALSTORAGE) ? localStorage.getItem(IDENTITY_KEY_LOCALSTORAGE) : '{}'));
  const [salad,setSalad]= useState(0);
  const [bacon,setBacon]= useState(0);
  const [cheese,setCheese]= useState(0);
  const [meat,setMeat]= useState(0);
  const SALAD = "Salad"
  const BACON= "Bacon"
  const CHEESE = "Cheese"
  const MEAT = "Meat"
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
    
    <table className= "burger-detail" >
      <tr>
        <td> Salad</td>
        <td> <button onClick={()=> changeValue(SALAD,-1)}>Less</button></td>
        <td> <span>{salad}</span></td>
        <td> <button onClick={()=> changeValue(SALAD,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Bacon</td>
        <td> <button onClick={()=> changeValue(BACON,-1)}>Less</button></td>
        <td> <span>{bacon}</span></td>
        <td> <button onClick={()=> changeValue(BACON,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Cheese</td>
        <td> <button onClick={()=> changeValue(CHEESE,-1)}>Less</button></td>
        <td> <span>{cheese}</span></td>
        <td> <button onClick={()=> changeValue(CHEESE,+1)}>More</button></td>
      </tr>
      <tr>
        <td> Meet</td>
        <td> <button onClick={()=> changeValue(MEAT,-1)}>Less</button></td>
        <td> <span>{meat}</span></td>
        <td> <button onClick={()=> changeValue(MEAT,+1)}>More</button></td>
      </tr>
    </table>
    <div className="hihi"> 
      <button > <a href="">Check Out</a></button> 
      </div>
    </div>
  )
}

