import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h2 className='text-center'>Cart details </h2>
            <h2>Cart data : {cart.length}</h2>
            <div>
                {
                    cart.map((item,i) => <h3 key={i}>  {item.strMeal}</h3>)
                }


            </div>
            
        </div>
    );
};

export default Cart;