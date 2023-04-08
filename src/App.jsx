import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
        <Header></Header>
        <div className='min-h-[calc(100vh-137px)]'>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </React.Fragment>
  );
};

export default App;