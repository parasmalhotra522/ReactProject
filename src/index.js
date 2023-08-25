import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import { UserProvider } from './context/context.component';
import { CategoriesProvider } from './context/categories.context';
import { CartContextProvider } from './context/cart.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  {/* it is the application we wrap around in the BrowserRouter so BrowserRouter
  knows where we are in the path of our application and we can navigate more easily  */}

    <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
      <CartContextProvider>
        <App />
        </CartContextProvider>
      </CategoriesProvider>
     
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
