import React from 'react';

const Cart = () => {
    const CartData = localStorage.getItem('shopping-cart');
    // console.log(CartData);
    if(CartData){
        const cart = JSON.parse(CartData)
    }
    return (
        <div>
            cart
        </div>
    );
};

export default Cart;