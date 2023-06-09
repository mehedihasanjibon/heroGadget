import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home';
import ErrorPage from './components/Errorpage';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart';
import { productsAndCartData } from './loaders/getCart&Productdata';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: productsAndCartData,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
                loader: () => fetch('products.json')
            },
            {
                path: '/cart',
                element: <Cart></Cart>,
                loader: productsAndCartData,
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
