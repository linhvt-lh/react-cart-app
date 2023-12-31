import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Link ,Outlet, Router} from 'react-router-dom';
import Home from './src/page/Home/index.jsx';
import Cart from './src/page/Cart.jsx';
import CartReducer from './src/slices/CartReducer.js';
import Blogs from './src/page/Blogs.jsx';
import BlogSingle from './src/page/BlogSingle.jsx';
import List from "./src/component/Blogs/List.jsx";

export const store = configureStore({
   reducer:{
      cart: CartReducer
   }
})

const  App = () => {
  return(
      <Provider store={store}>
         <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/cart" element={<Cart/>} />
               <Route path="/blogs" element={<Blogs />} >
                  <Route path="list" element={<List />} />
                  <Route path="search" element={<List />} />
                  <Route path=":blogID" element={<BlogSingle />} />
               </Route>
            </Routes>
            <Outlet />
         </BrowserRouter>
      </div>
      </Provider>
  );
}
export default App;
