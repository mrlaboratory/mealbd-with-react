import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';

const Card = ({ strMeal, strMealThumb, cart, setCart, item }) => {
    const addtocart = (data) => {
        const exist = cart.find(d => d.idMeal == data.idMeal)
        if (!exist) {
            const newCart = [...cart, data]
            setCart(newCart)
            toast("Meal , added !");
        } else {
            toast("Meal , Alredy exist ");
        }



    }

    return (
        <div className='border rounded-lg p-2'>
            <img className='rounded-lg' src={strMealThumb} alt="" />
            <h2 className='text-center text-xl '>{strMeal}</h2>
            <button className='btn w-[100%]' onClick={() => addtocart(item)}>Add To cart   <FontAwesomeIcon icon={faCartShopping} />
            </button>



        </div>


    );
};

export default Card;