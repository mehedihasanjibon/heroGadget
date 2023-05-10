import React, { createContext } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Outlet, useLoaderData } from 'react-router-dom';

export const ProductContext = createContext([])
export const CartContext = createContext([])

const App = () => {
  const {cartArray, products} = useLoaderData()
  console.log(cartArray);
  return (
    <ProductContext.Provider value={products}>
      <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </ProductContext.Provider>
  );
};

export default App;