import React from 'react';
import { BrowserRouter, Routes, Route, Link ,Outlet, Router} from 'react-router-dom';
import Home from './src/page/Home/index.jsx';
import Blogs from './src/page/Blogs.jsx';
import Cart from './src/page/Cart.jsx';
import BlogSingle  from "./src/page/BlogSingle.jsx";


const  App = () => {
   
  return(
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
         </Routes>
      </BrowserRouter>
      
       
     </div>
  );
}
export default App;
