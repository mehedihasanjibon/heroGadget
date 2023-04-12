import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';

const Cart = () => {
const {cartArray} = useLoaderData();
    
    console.log(cartArray);

    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900
        '>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cartArray.length ? "Review cart items" : "cart is EMPTY!"}
                </h2>

                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cartArray.map(product => <CartItem
                            key={product.id} 
                            product={product}
                            ></CartItem> )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;