import { json } from "react-router-dom";

// ADd data to local storage 
const addToDb = id => {
    // localStorage.setItem('shopping-cart', id)
    let shoppingCart = {}

    // get previous data from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    
}

export{ addToDb }