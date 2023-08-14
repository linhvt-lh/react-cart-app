import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home/index.jsx';
import Cart from './page/Cart.jsx';
import CartReducer from "./slices/CartReducer.js";
import Blogs from './page/Blogs.jsx';
import BlogSingle from './page/BlogSingle.jsx';
import List from "./component/Blogs/List.jsx";

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
               {/* <Route path="/cart" element={<Cart/>} /> */}
               <Route path="/blogs" element={<Blogs />} >
                  <Route path="list" element={<List />} />
                  <Route path="search" element={<List />} />
                  <Route path=":blogID" element={<BlogSingle />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
      </Provider>
    
  );
}
export default App;
