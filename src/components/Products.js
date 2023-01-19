import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Data } from "./Data";
import {add} from "../redux/Actions"
export const Products = () => {
    const cart = useSelector((state) => state.Reducer.cart);
    console.log(cart);
    const dispatch = useDispatch();
const AddtoCart=(ile)=>{
    dispatch(add(ile));
}

    const displayItems=Data.map((i)=>{
        return (
          <div key={i.id} className="white container">
            <img src={i.image} alt="title" />
            <div className="content">
              <h3>{i.name}</h3>
              <p>${i.price}</p>
            </div>
            <div>
                <button onClick={()=>AddtoCart(i)}>Add To Cart</button>              
            </div>
          </div>
        );
    })
  return (
    <div className='container'>
      <header className="flex">
        <i class="fa-solid fa-bars"></i>
              <Link to="/cart">
        <button>
          <i class="fa-solid fa-shop"></i>
          Cart({cart.length})
        </button>
              </Link>
          </header>
          <div className='products'>
              {displayItems}
          </div>
    </div>
  );
}
