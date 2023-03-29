import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartFlatbed, faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navber/Navbar';
import Card from './components/Card/Card';
import Cart from './components/Cart/Cart';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [data, setData] = useState([])
  const [query, setQuery] = useState('a')
  const [cart,setCart] = useState([])


  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`)
      .then(res => res.json())
      .then(data => setData(data.meals))

  }, [query])

  console.log(data)
  return (
    <div className='conatiner p-3'>
      <Navbar query={query} setQuery={setQuery}></Navbar>

      <div className='grid grid-cols-4 gap-3'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 col-span-3'>
          {
            data.map((item, i) => <Card item={item} cart={cart} setCart={setCart} key={item.idMeal} {...item}></Card>)
          }

        </div>
        <div>
         <Cart cart={cart} ></Cart>
         <ToastContainer />

        </div>
      </div>


    </div>
  );
};

export default App;