import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([])
    const pData = useLoaderData();
    // console.log(pData);

    useEffect( () => {
        const savedCart = getStoredCart()
        // console.log(savedCart);
        let newArr =[]
        for(const id in savedCart){
            const foundProduct = pData.find(product => product.id === id)
            if(foundProduct){
                foundProduct.quantity = savedCart[id];
                // cartD.push(foundProduct);
                // setCart([...cart, foundProduct]);
                newArr.push(foundProduct)
            }
        }
        setCart(newArr)
    }, [])
    
    console.log(cart);

    return (
        <div>
            cart
        </div>
    );
};

export default Cart;