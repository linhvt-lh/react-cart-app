import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link ,Outlet, Router} from 'react-router-dom';
import Home from './src/page/Home/index.jsx';
// import Blogs from './src/page/Blogs.jsx';
import Cart from './src/page/Cart.jsx';
// import BlogSingle  from "./src/page/BlogSingle.jsx";
import CartReducer from './src/slices/CartReducer.js';


export const store = configureStore({
   reducer:{
      cart: CartReducer
   }
})

const  App = () => {
   
  return(
      <Provider store={store}>
         <div>
         {/* <BrowserRouter>
            <Routes> 
                  <Route path="/" element={<Home/> } /> 
                  <Route path="/products" element={} />
                  <Route path="/blogs" element={<Blogs/> } > 
                     <Route path=":blogId" element={<BlogSingle />}></Route>
                  </Route>
                  <Route path="/cart" element={<Cart/> } /> 
            </Routes> 
         </BrowserRouter> */}
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart/>} />
            </Routes>
         </BrowserRouter>
      </div>
      </Provider>
    
  );
}
export default App;
