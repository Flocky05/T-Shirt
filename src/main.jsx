import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import CartShirt from './components/CardShirt/CartShirt';
import ProductContext from './context/ProductContext';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('data.json')
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/cartShirt",
        element:<CartShirt></CartShirt>
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContext>
        <RouterProvider router={router} />
    </ProductContext>
  </React.StrictMode>,
)
