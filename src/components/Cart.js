import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add, decrement, increment, remove } from '../redux/Actions';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const cart = useSelector((state) => state.Reducer.cart);
    console.log(cart)
    const dispatch = useDispatch();
    const dispatcher = (ile) => {
        dispatch(remove(ile))
    }
    const dispatcherThree = (ile) => {
        dispatch(decrement(ile))
    }
     const addition = (acc, currentvalue) => {
       return acc + currentvalue.price * currentvalue.qty;
     };
     const total = cart.reduce(addition, 0);
    const displayItem = cart.map((i) => {
        return (
            <div key={i.id} className=" white container">
                <div>
                    <img src={ i.image} alt="title" height={300} width="300px" />
                </div>
                <div>
                    <h1>{i.name}</h1>
                    <p>Price: ${ i.price}</p>
                </div>
                <div className='flex'>
                <button onClick={()=>dispatch({type:"INCREMENT",payload:i})}>+</button>
                <p>{ i.qty}</p>
                <button onClick={()=>dispatcherThree(i)}>-</button>
                </div>
                <div><p>amount:{ i.price * i.qty}</p></div>
                <button onClick={()=>dispatcher(i)}>Delete Item</button>
            </div>
        )
    })
  return (
    <div>
      <header className="flex container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <h1>This is Your Cart</h1>
      </header>
      {cart.length === 0 ? (
      <h3 className='empty'>Empty Cart</h3>
      ) : (
        <div>{displayItem}</div>          
      )}
      <h2> {total > 0 && <h2>total:{total}</h2>}</h2>
    </div>
  );
}
