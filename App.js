import React from 'react';
import { BrowserRouter, Routes, Route, Link ,Outlet, Router} from 'react-router-dom';
import Home from './src/page/Home.jsx';
import Blogs from './src/page/Blogs.jsx';
import Cart from './src/page/Cart.jsx';
import BlogSingle  from "./src/page/BlogSingle.jsx";


const  App = () => {
  return(
     <div>
      <BrowserRouter>
         <Routes> 
               <Route path="/" element={<Home/> } /> 
               <Route path="/blogs" element={<Blogs/> } > 
                  <Route path=":blogId" element={<BlogSingle />}></Route>
               </Route>
               <Route path="/cart" element={<Cart/> } /> 
         </Routes> 
      </BrowserRouter>
       
     </div>
  );
}
export default App;
